/**
 * Captures retravaillées (générées par `npm run images` depuis captures-brutes/).
 * Chaque capture existe en deux largeurs pour un srcset adapté à l'écran.
 */
import webMission800 from "@/assets/screens/web-detail-mission-800.webp"
import webMission1400 from "@/assets/screens/web-detail-mission-1400.webp"
import webControles800 from "@/assets/screens/web-controles-programmes-800.webp"
import webControles1400 from "@/assets/screens/web-controles-programmes-1400.webp"
import webQr800 from "@/assets/screens/web-qr-codes-sites-800.webp"
import webQr1400 from "@/assets/screens/web-qr-codes-sites-1400.webp"
import mAccueil360 from "@/assets/screens/mobile-accueil-chef-equipe-360.webp"
import mAccueil600 from "@/assets/screens/mobile-accueil-chef-equipe-600.webp"
import mPointer360 from "@/assets/screens/mobile-pointer-360.webp"
import mPointer600 from "@/assets/screens/mobile-pointer-600.webp"
import mConfirme360 from "@/assets/screens/mobile-pointage-confirme-360.webp"
import mConfirme600 from "@/assets/screens/mobile-pointage-confirme-600.webp"
import mJours360 from "@/assets/screens/mobile-mes-jours-360.webp"
import mJours600 from "@/assets/screens/mobile-mes-jours-600.webp"
import mActivation360 from "@/assets/screens/mobile-activation-prete-360.webp"
import mActivation600 from "@/assets/screens/mobile-activation-prete-600.webp"

export type Screen = {
  src: string
  srcSet: string
  width: number
  height: number
  alt: string
}

const web = (s: string, l: string, alt: string): Screen => ({
  src: l,
  srcSet: `${s} 800w, ${l} 1400w`,
  width: 1400,
  height: 782,
  alt,
})

const mobile = (s: string, l: string, alt: string): Screen => ({
  src: l,
  srcSet: `${s} 360w, ${l} 600w`,
  width: 600,
  height: 1347,
  alt,
})

export const screens = {
  webMission: web(
    webMission800,
    webMission1400,
    "Back-office KAYBIC Tracking : page de détail d'une mission avec son déroulement, son superviseur, ses sites d'intervention et ses pointages.",
  ),
  webControles: web(
    webControles800,
    webControles1400,
    "Back-office : liste des contrôles de présence programmés, par intervalle, chaque jour ou à date fixe, avec un interrupteur pour les activer.",
  ),
  webQr: web(
    webQr800,
    webQr1400,
    "Back-office : QR codes des sites, avec pour chacun les boutons Imprimer et Régénérer.",
  ),
  mobileAccueil: mobile(
    mAccueil360,
    mAccueil600,
    "Application mobile, accueil du chef d'équipe : statut « Au travail », équipe avec 1 présent, 3 attendus et 1 à vérifier, bouton « Pointer un agent » et durée de travail en cours.",
  ),
  mobilePointer: mobile(
    mPointer360,
    mPointer600,
    "Application mobile : grand bouton rouge « Pointer » avec une empreinte, le site et le créneau horaire, et le lien « Scanner le QR du site ».",
  ),
  mobileConfirme: mobile(
    mConfirme360,
    mConfirme600,
    "Application mobile : pointage confirmé à 14:30, message « Bonne journée ! » et indication « Dans la zone ».",
  ),
  mobileJours: mobile(
    mJours360,
    mJours600,
    "Application mobile, écran « Mes jours » : heures de la semaine et liste des journées passées avec leur statut.",
  ),
  mobileActivation: mobile(
    mActivation360,
    mActivation600,
    "Application mobile : activation réussie de l'appareil, message « C'est prêt. ».",
  ),
}
