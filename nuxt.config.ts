// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Climb Tampa Bay",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Introducing the newest and friendliest climbing gym in Tampa Bay! The facility offers a range of challenging bouldering problems, top-notch gym equipment designed to help you build strength, and a supportive community of climbers.",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "stylesheet",
          href: "https://cdn.lineicons.com/4.0/lineicons.css",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&display=swap",
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
