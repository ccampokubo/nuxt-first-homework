// https://nuxt.com/docs/api/configuration/nuxt-config
import sass from "sass";
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },

  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },

  // modules
  modules: ["@nuxtjs/i18n"],

  // translator
  i18n: {
    locales: [
      {
        code: "es",
        iso: "es-ES",
      },
    ],
    defaultLocale: "es",
    vueI18n: "./lang/i18n.config.ts", // if you are using custom path, default
  },

  // css
  css: ["~/assets/scss/main.scss"],

  // config envs
  runtimeConfig: {
    public: {
      secret: process.env.SECRET,
      API_BASE_URL: process.env.API_URL,
      SHORT_NAME: process.env.SHORT_NAME,
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  build: {
    transpile: ["primevue", "@nuxtjs/i18n"],
  },

  setup(build: any) {
    build.css.preprocessorOptions = {
      sass: {
        implementation: sass,
      },
    };
  },
});
