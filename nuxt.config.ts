import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-11",
  modules: ['@nuxtjs/supabase', '@nuxt/ui'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        }
      ]
    }
  },
  vite: {
    plugins: [svgLoader()],
  },
  css: [
    "@/assets/css/variables.css",
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  plugins: ["@/plugins/fontawesome.js"],
  supabase: {
    redirect: false
  }
});
