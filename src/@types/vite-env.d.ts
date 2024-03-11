/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PIZZASHOP_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
