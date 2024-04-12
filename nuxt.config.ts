// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "./assets/css/raleway-font.css", "./assets/css/roboto-font.css"
  ],
  modules: [
    
    '@nuxtjs/tailwindcss'
    //...
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/HZP_first_icon.ico' } // Change the href to match your file's name
      ]
    }
  }
})
