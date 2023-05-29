/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly USER: string;
    readonly PWD: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }