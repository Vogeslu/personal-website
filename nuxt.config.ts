// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
  //  "nuxt-purgecss"
  ],
  // purgecss: {
  //   safelist: [/svg.*/, /fa.*/]
  // },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Luca Voges - Web- & App-Entwickler",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Luca Voges - Web- & App-Entwickler",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Luca Voges - Web- & App-Entwickler",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Luca Voges - Web- & App-Entwickler",
        },
        { hid: "og:url", property: "og:url", content: "https://vogeslu.de" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Luca Voges - Web- & App-Entwickler",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { hid: "twitter:site", name: "twitter:site", content: "@luca_voges" },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@luca_voges",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Luca Voges - Web- & App-Entwickler",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Luca Voges - Web- & App-Entwickler",
        },
      ],
    },
  },
  experimental: { treeshakeClientOnly: false },
});
