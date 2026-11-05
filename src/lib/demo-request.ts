/**
 * Envoi d'une demande de démo à l'API trc-server (`POST /demo-requests`).
 *
 * L'adresse de l'API vient de `VITE_API_URL` (voir `.env.example`). L'origine
 * du site doit figurer dans `CORS_ORIGINS` côté serveur.
 */

export type DemoRequestInput = {
  fullName: string
  company: string
  email: string
  phone?: string
  message?: string
  /** Champ caché anti-robot : toujours vide pour un humain. */
  website?: string
}

export type DemoRequestField = "fullName" | "company" | "email" | "phone" | "message"

export type DemoRequestResult =
  | { ok: true }
  | { ok: false; reason: "invalid"; fields: DemoRequestField[] }
  | { ok: false; reason: "rate-limited" | "unavailable" }

const API_URL = (import.meta.env.VITE_API_URL ?? "").trim().replace(/\/+$/, "")

/** Au-delà, on considère l'envoi comme échoué plutôt que de laisser le bouton bloqué. */
const TIMEOUT_MS = 15_000

const FIELDS: DemoRequestField[] = ["fullName", "company", "email", "phone", "message"]

export async function sendDemoRequest(input: DemoRequestInput): Promise<DemoRequestResult> {
  if (!API_URL) {
    if (import.meta.env.DEV) {
      console.warn("VITE_API_URL n'est pas défini : copiez .env.example en .env.local.")
    }
    return { ok: false, reason: "unavailable" }
  }

  let response: Response
  try {
    response = await fetch(`${API_URL}/demo-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(input),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
  } catch {
    // réseau coupé, CORS refusé, délai dépassé
    return { ok: false, reason: "unavailable" }
  }

  if (response.ok) return { ok: true }
  if (response.status === 429) return { ok: false, reason: "rate-limited" }
  if (response.status === 400) return { ok: false, reason: "invalid", fields: await invalidFields(response) }
  return { ok: false, reason: "unavailable" }
}

/**
 * Champs cités dans la réponse problem+json (`errors` : messages de validation
 * qui commencent par le nom du champ, ex. « email must be an email »).
 */
async function invalidFields(response: Response): Promise<DemoRequestField[]> {
  try {
    const body: unknown = await response.json()
    const errors = (body as { errors?: unknown })?.errors
    if (!Array.isArray(errors)) return []
    const text = errors.filter((e): e is string => typeof e === "string").join("\n")
    // le message du téléphone est personnalisé en français côté serveur
    return FIELDS.filter((f) => new RegExp(`\\b${f}\\b`).test(text) || (f === "phone" && /téléphone/i.test(text)))
  } catch {
    return []
  }
}
