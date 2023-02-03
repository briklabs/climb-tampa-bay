// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Climb Tampa Bay",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Nuxt.js project" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdn.lineicons.com/4.0/lineicons.css",
        },
      ],
      // script: [
      //   {
      //     src: "https://unpkg.com/splitting/dist/splitting.min.js",
      //     type: "text/javascript",
      //   },
      // ],
    },
  },
  content: {
    // https://content.nuxtjs.org/api/configuration,
    documentDriven: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
});
