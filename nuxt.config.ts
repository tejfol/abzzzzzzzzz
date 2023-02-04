// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  components: [{ path: "~/components", extensions: [".vue"] }],
  css: [
    "@/assets/css/tailwind.scss", // SCSS file in the project
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Test-abz",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
          charset: "utf-8",
        },
        {
          name: "description",
          content: "Test desc",
        },
        { property: "og:url", content: "localhost" },
        { property: "og:type", content: "video.movie" },
        {
          property: "og:title",
          content: "test:title",
        },
        {
          property: "og:description",
          content: "test:description",
        },
        {
          property: "og:image",
          content:
            "https://d3rdxns95z6jml.cloudfront.net/ceek-io-meta-image.webp",
        },
        { property: "og:image:width", content: "1280" },
        { property: "og:image:height", content: "720" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap",
        },
      ],
    },
  },
});
