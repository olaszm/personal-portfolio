import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-11",
    modules: ['@nuxtjs/supabase'],
    vite: {
        plugins: [svgLoader()],
    },
    css: [
        "@/assets/css/main.css",
        "@fortawesome/fontawesome-svg-core/styles.css",
    ],
    plugins: ["@/plugins/fontawesome.js"],
    runtimeConfig: {
        public: {
            SUPABASE_URL: "",
            SUPABASE_KEY: "",
        }
    },
    supabase: {
        redirect: false
    }
});
