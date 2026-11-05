/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Adresse de l'API trc-server, préfixe et version compris. */
  readonly VITE_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
