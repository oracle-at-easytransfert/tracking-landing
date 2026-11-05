# KAYBIC Tracking — site vitrine

Landing page de KAYBIC Tracking (React + Vite + TypeScript, Tailwind CSS v4, composants shadcn/ui).

## Lancer

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # vérifie les types puis produit dist/
npm run preview    # sert dist/ en local
```

## Modifier le contenu

- **Textes** : tout est dans [`src/content.ts`](src/content.ts) (hero, principe, étapes,
  fonctionnalités, deux espaces, sécurité, contact, pied de page). Les sections dans
  `src/components/sections/` ne font qu'afficher ces données.
- **Adresse de contact** : `site.contactEmail` dans `src/content.ts` (vide = non affichée).
- **Couleurs, police** : `src/index.css` ; règles et contrastes dans
  [`design-system/MASTER.md`](design-system/MASTER.md).
- **Composants shadcn/ui** : `src/components/ui/` (`components.json` est prêt pour
  `npx shadcn@latest add <composant>`).
- **Logo** : le composant `Wordmark` (`src/components/brand.tsx`) affiche une marque texte ;
  remplacez-le par une `<img>` du logo officiel si besoin.

## Captures d'écran

Les originaux restent dans `captures-brutes/` (jamais modifiés). Les versions du site sont
générées dans `src/assets/screens/` par :

```bash
npm run images     # Python 3 + Pillow
```

Le script [`scripts/prepare-screens.py`](scripts/prepare-screens.py) masque la barre d'état
des captures mobiles, retire le bas des captures web (URL `localhost`, bouton d'outil de dev),
remplace les noms réels par des noms fictifs (`CHEF_PRENOM`, `ADMIN_NOM`… en tête du script),
floute le QR code réel et le matricule, puis exporte en WebP (deux tailles). Les cadres de
téléphone et de navigateur sont dessinés en CSS (`src/components/device-frames.tsx`).
Pour une nouvelle capture : la déposer dans `captures-brutes/`, l'ajouter dans le script et
dans `src/screens.ts` (avec un texte `alt`).

## À savoir

- Le **formulaire de démo** envoie la demande à l'API trc-server (`POST /api/v1/demo-requests`,
  voir `src/lib/demo-request.ts`). Renseigner `VITE_API_URL` (copier `.env.example` en
  `.env.local`) et ajouter l'origine du site dans `CORS_ORIGINS` côté serveur. Les demandes se
  consultent et se modifient par l'opérateur dans `/platform/demo-requests`.
  Sans `VITE_API_URL` (Vite ne lit pas `.env.example`), le formulaire n'appelle rien et
  affiche « L'envoi n'a pas abouti ». En local, l'origine doit être exactement celle du
  serveur de dev (ex. `http://localhost:5173`) pour passer le CORS.
- Le skill UI UX Pro Max est installé dans `.claude/skills/ui-ux-pro-max` (pour Claude Code).
