import { Wordmark } from "@/components/brand"
import { footer, nav, site } from "@/content"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-ink text-zinc-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Wordmark dark />
          <p className="mt-3 text-[15px]">{footer.tagline}</p>
          {site.contactEmail && (
            <a href={`mailto:${site.contactEmail}`} className="mt-2 inline-block text-[15px] text-white hover:underline">
              {site.contactEmail}
            </a>
          )}
        </div>
        <nav aria-label="Pied de page">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-1 sm:flex sm:gap-6">
            {[...nav, { label: "Contact", href: "#contact" }].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center text-[15px] hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-zinc-800">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-zinc-400 sm:px-6">
          © {new Date().getFullYear()} {site.company}. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
