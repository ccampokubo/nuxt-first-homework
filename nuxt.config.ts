// https://nuxt.com/docs/api/configuration/nuxt-config
import sass from "sass";
export default defineNuxtConfig({
  cache: {
    components: true,
  },

  nitro: {
    compressPublicAssets: true,
  },

  typescript: {
    strict: true,
  },

  app: {
    head: {
      titleTemplate: "%s - Stack Front",
      title: "Stack Front para los BO",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Stack Front para los Backoffice",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
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
        file: "es.ts",
        name: "Español",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "es",
  },

  // css
  css: ["~/assets/scss/main.scss"],

  // config envs
  runtimeConfig: {
    public: {
      secret: process.env.SECRET_KEY,
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
    transpile: ["primevue", "@nuxtjs/i18n", "@nuxtjs/moment"],
  },

  setup(build: any) {
    build.css.preprocessorOptions = {
      sass: {
        implementation: sass,
      },
    };
  },
});
