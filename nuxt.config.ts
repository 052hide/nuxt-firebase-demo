import { Configuration } from '@nuxt/types'
require('dotenv').config()

const config: Configuration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s | ${process.env.PROJECT_NAME}` || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: ''
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: ''
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: ''
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: ''
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ''
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css', '@/assets/scss/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/vueLazyload', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/sentry'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  sentry: { dsn: '' },
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  // typescript: {
  //   typeCheck: {
  //     eslint: true
  //   }
  // }
  // generate: {
  //   async routes() {
  //     let firebaseApp: firebase.app.App
  //     if (firebase.apps.some((app) => app.name === 'jamstack')) {
  //       firebaseApp = firebase.app('jamstack')
  //     } else {
  //       const fbConfig: FirebaseOptions = {
  //         apiKey: FB_APY_KEY,
  //         authDomain: FB_AUTH_DOMAIN,
  //         databaseURL: FB_DATABASE_URL,
  //         projectId: FB_PROJECT_ID,
  //         storageBucket: FB_STORAGE_BUCKET,
  //         messagingSenderId: FB_MESSAGING_SENDER_ID,
  //         appId: FB_APP_ID,
  //         measurementId: FB_MEASUREMENT_ID
  //       }
  //       firebaseApp = firebase.initializeApp(fbConfig, 'jamstack')
  //     }
  //     const db = firebaseApp.firestore()
  //     const fbSettings: firebase.firestore.Settings = {}
  //     db.settings(fbSettings)

  //     const routes: {
  //       route: string
  //     }[] = []
  //     const collectionName = ''
  //     const collection = await db.collection(collectionName).get()
  //     collection.forEach((doc) => {
  //       routes.push({
  //         route: `/${collectionName}/${doc.id}`
  //       })
  //     })
  //     await firebase.app('jamstack').delete()
  //     return routes
  //   }
  // },
  ignore: ['**/*.stories.*']
}

export default config
