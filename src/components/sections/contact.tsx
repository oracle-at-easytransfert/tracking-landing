import { useRef, useState, type FormEvent } from "react"
import { CircleAlert, CircleCheck, Loader2, Mail, Send } from "lucide-react"

import { SectionHeading } from "@/components/brand"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contact, site } from "@/content"
import { sendDemoRequest, type DemoRequestField } from "@/lib/demo-request"

type Status = "idle" | "sending" | "sent" | "invalid" | "rate-limited" | "unavailable"

/** Nom du champ API → id du champ du formulaire et libellé affiché. */
const FIELD_UI: Record<DemoRequestField, { id: string; label: string }> = {
  fullName: { id: "nom", label: "nom et prénom" },
  company: { id: "entreprise", label: "entreprise" },
  email: { id: "email", label: "e-mail" },
  phone: { id: "telephone", label: "téléphone" },
  message: { id: "message", label: "votre besoin" },
}

const FEEDBACK: Record<Exclude<Status, "idle" | "sending" | "invalid">, string> = {
  sent: "Merci ! Votre demande est bien reçue, nous vous recontactons rapidement.",
  "rate-limited": "Plusieurs demandes ont déjà été envoyées depuis votre connexion. Réessayez dans une heure.",
  unavailable: "L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez dans un instant.",
}

function invalidMessage(fields: DemoRequestField[]) {
  if (fields.length === 0) return "Certaines informations ne sont pas valides. Vérifiez le formulaire et réessayez."
  const labels = fields.map((f) => FIELD_UI[f].label).join(", ")
  return `Vérifiez ${fields.length > 1 ? "ces champs" : "ce champ"} : ${labels}.`
}

/** Formulaire de demande de démo, envoyé à l'API (`POST /demo-requests`). */
export function Contact() {
  const [status, setStatus] = useState<Status>("idle")
  const [invalid, setInvalid] = useState<DemoRequestField[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const field = (name: string) => String(data.get(name) ?? "").trim()

    setStatus("sending")
    setInvalid([])
    const result = await sendDemoRequest({
      fullName: field("nom"),
      company: field("entreprise"),
      email: field("email"),
      phone: field("telephone") || undefined,
      message: field("message") || undefined,
      website: field("website") || undefined,
    })

    if (result.ok) {
      form.reset()
      setStatus("sent")
      return
    }
    setStatus(result.reason)
    if (result.reason === "invalid") {
      setInvalid(result.fields)
      // place le focus sur le premier champ refusé
      const first = result.fields[0]
      if (first) formRef.current?.querySelector<HTMLElement>(`#${FIELD_UI[first].id}`)?.focus()
    }
  }

  const sending = status === "sending"
  const isInvalid = (f: DemoRequestField) => invalid.includes(f) || undefined
  const feedback =
    status === "invalid" ? invalidMessage(invalid) : status === "idle" || status === "sending" ? "" : FEEDBACK[status]
  const success = status === "sent"

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading id="contact-title" eyebrow={contact.eyebrow} title={contact.title} intro={contact.text} />
          {site.contactEmail && (
            <p className="mt-6">
              <a
                href={`mailto:${site.contactEmail}`}
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-brand underline-offset-4 hover:underline"
              >
                <Mail aria-hidden className="size-5" />
                {site.contactEmail}
              </a>
            </p>
          )}
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative rounded-2xl border bg-zinc-50 p-5 sm:p-8"
          aria-busy={sending}
          aria-describedby="contact-feedback"
        >
          {/* Piège à robots : invisible et hors du parcours clavier, un humain le laisse vide. */}
          <div aria-hidden className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden">
            <label htmlFor="website">Site web</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="nom">Nom et prénom</Label>
              <Input id="nom" name="nom" autoComplete="name" maxLength={120} required aria-invalid={isInvalid("fullName")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="entreprise">Entreprise</Label>
              <Input
                id="entreprise"
                name="entreprise"
                autoComplete="organization"
                maxLength={160}
                required
                aria-invalid={isInvalid("company")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail professionnel</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                maxLength={254}
                required
                aria-invalid={isInvalid("email")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="telephone">
                Téléphone <span className="font-normal text-zinc-600">(facultatif)</span>
              </Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                // échappements requis : les navigateurs compilent `pattern` avec le drapeau `v`
                pattern="[+0-9 \(\)\.\-]{6,30}"
                maxLength={30}
                title="6 à 30 caractères : chiffres, espaces, +, points, tirets ou parenthèses."
                aria-invalid={isInvalid("phone")}
              />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="message">
                Votre besoin <span className="font-normal text-zinc-600">(facultatif)</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Nombre d'agents, de sites, contexte…"
                maxLength={2000}
                aria-invalid={isInvalid("message")}
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={sending}>
            {sending ? <Loader2 aria-hidden className="animate-spin" /> : <Send aria-hidden />}
            {sending ? "Envoi…" : "Demander une démo"}
          </Button>

          <p
            id="contact-feedback"
            role="status"
            aria-live="polite"
            className={`mt-4 flex gap-2 text-base font-medium empty:hidden ${success ? "text-success" : "text-destructive"}`}
          >
            {feedback && (
              <>
                {success ? (
                  <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0" />
                ) : (
                  <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0" />
                )}
                <span>{feedback}</span>
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  )
}
