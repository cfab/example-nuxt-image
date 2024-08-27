export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Image Example'
    }
  },
  modules: [
    '@nuxt/image',
  ],
  image: {
    provider:'netlify',
    domains: [
      'https://poche24.wonderweb.ch/.*',
    //   'https://images.unsplash.com',
    //   'https://source.unsplash.com'
     ]
  }
})
