/**
 * Tous les textes du site sont ici. Modifiez ce fichier pour changer le contenu ;
 * les sections (src/components/sections) se contentent de l'afficher.
 * Les icônes viennent de lucide-react : https://lucide.dev/icons
 */
import {
  BadgeCheck,
  CalendarClock,
  CalendarRange,
  ClipboardCheck,
  CloudOff,
  FileSpreadsheet,
  Fingerprint,
  History,
  MapPinned,
  QrCode,
  ShieldCheck,
  Smartphone,
  TimerReset,
  Users,
  type LucideIcon,
} from "lucide-react"

import { screens } from "@/screens"

export const site = {
  name: "KAYBIC Tracking",
  company: "KAYBIC AFRICA",
  // Adresse de contact affichée dans la section Contact et le pied de page.
  // Laissée vide tant que l'adresse réelle n'est pas fournie (rien n'est alors affiché).
  contactEmail: "",
}

export const nav = [
  { label: "Le principe", href: "#probleme" },
  { label: "Comment ça marche", href: "#fonctionnement" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Sécurité", href: "#securite" },
]

export const hero = {
  eyebrow: "Traçabilité du personnel mobile",
  title: "Sachez qui est sur le terrain, où et à quelle heure.",
  subtitle:
    "KAYBIC Tracking réunit un back-office web pour organiser les missions et une application mobile pour pointer sur site. Les présences sont vérifiées, horodatées et consultables à tout moment.",
  primaryCta: { label: "Demander une démo", href: "#contact" },
  secondaryCta: { label: "Voir les fonctionnalités", href: "#fonctionnalites" },
  points: ["Pointage géolocalisé", "Fonctionne hors ligne", "Exports Excel"],
}

export const problem = {
  eyebrow: "Le principe",
  title: "Des équipes dispersées, une seule source de vérité",
  intro:
    "Quand le personnel travaille sur plusieurs sites, il est difficile de savoir qui était présent, sur quel site et pendant combien de temps. Les feuilles de présence papier et les messages s'égarent, se contestent et prennent du temps à consolider.",
  goalTitle: "Notre objectif",
  goal:
    "Donner aux responsables une vue fiable et vérifiable des présences sur le terrain, sans alourdir le travail des équipes : un geste pour pointer, le reste est automatique.",
  items: [
    {
      before: "Présences déclarées sans preuve",
      after: "Chaque pointage est horodaté, localisé dans le périmètre du site et accompagné d'un selfie.",
    },
    {
      before: "Heures recomptées à la main",
      after: "Les périodes de travail et les totaux sont calculés, puis exportables en Excel.",
    },
    {
      before: "Pas de réseau sur le site",
      after: "Le téléphone enregistre les pointages hors ligne et les synchronise dès que possible.",
    },
  ],
}

export const steps = {
  eyebrow: "Comment ça marche",
  title: "Trois étapes, du bureau au terrain",
  items: [
    {
      number: "01",
      title: "Le back-office organise",
      text: "Les administrateurs et superviseurs créent les missions, les sites géolocalisés avec leur périmètre, les équipes et leur planning.",
      icon: CalendarRange,
    },
    {
      number: "02",
      title: "Le chef d'équipe pointe",
      text: "Sur son téléphone, le chef d'équipe pointe pour lui et pour ses agents, par bouton ou en scannant le QR code du site, avec empreinte et selfie.",
      icon: Smartphone,
    },
    {
      number: "03",
      title: "Le bureau suit et valide",
      text: "Les pointages sans anomalie sont validés automatiquement. Les autres arrivent dans une file de validation. Les totaux sont prêts à exporter.",
      icon: ClipboardCheck,
    },
  ],
}

export type Feature = { title: string; text: string; icon: LucideIcon }

export const features: { eyebrow: string; title: string; intro: string; items: Feature[] } = {
  eyebrow: "Fonctionnalités",
  title: "Tout ce qu'il faut pour suivre les présences",
  intro: "Des fonctions simples, pensées pour le terrain et pour le bureau.",
  items: [
    {
      title: "Missions et sites géolocalisés",
      text: "Chaque site a une position et un périmètre. Le pointage indique si l'agent est dans la zone.",
      icon: MapPinned,
    },
    {
      title: "Planning des équipes",
      text: "Affectez les équipes aux sites et aux créneaux. Chacun voit ses jours à venir et passés.",
      icon: CalendarRange,
    },
    {
      title: "Pointage par bouton ou QR code",
      text: "Un bouton « Pointer » ou le scan du QR code du site, confirmé par l'empreinte et un selfie.",
      icon: Fingerprint,
    },
    {
      title: "Fonctionne hors ligne",
      text: "Pas de réseau ? Les pointages sont gardés sur le téléphone puis synchronisés.",
      icon: CloudOff,
    },
    {
      title: "Le chef d'équipe pointe pour son équipe",
      text: "Un seul téléphone par équipe : le chef voit les présents, les attendus et les cas à vérifier.",
      icon: Users,
    },
    {
      title: "Contrôles de présence",
      text: "Lancés à distance ou programmés : à heure fixe, chaque jour ou par intervalle.",
      icon: CalendarClock,
    },
    {
      title: "Validation automatique",
      text: "Les pointages sans anomalie sont validés seuls ; les autres passent par une file de validation.",
      icon: BadgeCheck,
    },
    {
      title: "Périodes de travail et totaux",
      text: "Les heures travaillées sont regroupées par période et totalisées par agent.",
      icon: TimerReset,
    },
    {
      title: "Exports Excel",
      text: "Exportez les présences et les totaux pour la paie ou le reporting.",
      icon: FileSpreadsheet,
    },
    {
      title: "Journal d'audit",
      text: "Les actions effectuées dans le back-office sont tracées et consultables.",
      icon: History,
    },
    {
      title: "QR codes des sites à imprimer",
      text: "Générez, imprimez et régénérez le QR code de chaque site ; l'ancien est alors invalidé.",
      icon: QrCode,
    },
  ],
}

export const spaces = {
  eyebrow: "Deux espaces",
  title: "Un outil pour le bureau, un autre pour le terrain",
  web: {
    tab: "Back-office web",
    title: "Le back-office, pour organiser et contrôler",
    text: "Pour les administrateurs et les superviseurs, depuis un navigateur.",
    points: [
      "Missions, sites, équipes et employés",
      "Contrôles de présence et périodes",
      "Régularisations et file de validation",
      "Appareils, QR codes et journal d'audit",
    ],
    shots: [
      { ...screens.webMission, caption: "Détail d'une mission : déroulement, sites, superviseur et pointages." },
      { ...screens.webControles, caption: "Contrôles programmés : une fois, chaque jour ou par intervalle." },
      { ...screens.webQr, caption: "QR codes des sites, à imprimer et à régénérer." },
    ],
  },
  mobile: {
    tab: "Application mobile",
    title: "L'application, pour pointer en un geste",
    text: "Pour le chef d'équipe, qui porte le téléphone et pointe pour ses agents.",
    points: [
      "Activation de l'appareil par matricule",
      "Pointage par bouton ou QR code du site",
      "Vue de l'équipe : présents, attendus, à vérifier",
      "Historique « Mes jours » et heures de la semaine",
    ],
    shots: [
      { ...screens.mobileActivation, caption: "Appareil activé." },
      { ...screens.mobilePointer, caption: "Pointer en un geste." },
      { ...screens.mobileConfirme, caption: "Pointage confirmé, dans la zone." },
      { ...screens.mobileJours, caption: "Mes jours et heures de la semaine." },
    ],
  },
}

export const security = {
  eyebrow: "Sécurité et fiabilité",
  title: "Des présences difficiles à contester",
  items: [
    {
      title: "Preuves à chaque pointage",
      text: "Heure, position par rapport au périmètre du site, empreinte et selfie.",
      icon: Fingerprint,
    },
    {
      title: "Appareils activés",
      text: "Le téléphone est activé pour l'entreprise avant de pouvoir pointer, et se gère depuis le back-office.",
      icon: ShieldCheck,
    },
    {
      title: "QR codes renouvelables",
      text: "Régénérer le QR code d'un site invalide immédiatement l'ancien.",
      icon: QrCode,
    },
    {
      title: "Traçabilité complète",
      text: "Le journal d'audit garde la trace des actions ; les anomalies passent par une validation humaine.",
      icon: History,
    },
  ],
}

export const contact = {
  eyebrow: "Contact",
  title: "Envie de voir KAYBIC Tracking en action ?",
  text: "Laissez-nous vos coordonnées : nous vous présenterons l'application et le back-office.",
}

export const footer = {
  tagline: "Traçabilité du personnel mobile.",
}
