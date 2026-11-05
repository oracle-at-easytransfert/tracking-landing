# Design system — KAYBIC Tracking (site vitrine)

Établi avec le skill **UI UX Pro Max** (`.claude/skills/ui-ux-pro-max`, dépôt officiel
`nextlevelbuilder/ui-ux-pro-max-skill`), puis adapté à la marque KAYBIC.

| Sujet | Choix | Origine |
|---|---|---|
| Motif de page | Hero → valeur → étapes → fonctionnalités → démonstration produit → CTA → pied de page | skill : « Hero + Features + CTA » et « Product Demo + Features » |
| Style | Minimalism & Swiss : grille, blanc et noir, un seul accent, peu d'effets | skill : `minimalism-and-swiss-style` |
| Couleurs | Rouge KAYBIC `#d80f16` (accent unique), noir `#0a0a0a`, blanc, gris zinc | marque (captures) — la palette bleue proposée par défaut par le skill est écartée |
| Police | Poppins 400/500/600/700, auto-hébergée (`@fontsource/poppins`) | DAT de l'entreprise |
| Icônes | Lucide (SVG), jamais d'emoji | skill (checklist) |

## Contrastes (WCAG AA)

- `#d80f16` sur blanc : 5,3:1 → texte et boutons OK.
- `#d80f16` sur noir : 4,0:1 → **pas** pour du texte ; utiliser `--brand-on-dark` `#ff5a60` (6,9:1).
- Texte secondaire : `zinc-600` sur blanc (7,5:1), `zinc-300` sur noir (13:1).

## Règles appliquées (checklist du skill)

- Corps de texte 16 px minimum, interligne 1,6 ; titres équilibrés (`text-wrap: balance`).
- Cibles tactiles ≥ 44 px (boutons, liens du menu et du pied de page).
- Focus clavier visible (contour rouge 3 px), lien d'évitement « Aller au contenu ».
- `prefers-reduced-motion` respecté (défilement et transitions neutralisés, téléphone non incliné).
- Images WebP en deux tailles (`srcset`), dimensions réservées (pas de décalage de mise en page),
  lazy loading hors hero.
- Responsive mobile d'abord, testé à 375 px et 1280 px, sans défilement horizontal.
- Libellés de formulaire visibles (pas seulement des placeholders).

Les jetons sont définis dans `src/index.css` (`:root` + `@theme inline`).
