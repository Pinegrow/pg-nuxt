// import { fileURLToPath, URL } from 'node:url'
import presetIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: false }, // Disable when using Vue devtools

  // Look into MetaTags.vue for other flavours
  app: {
    baseURL: '/',
    head: {
      meta: [{ charset: 'utf-8' }],
    },
  },

  modules: [
    '@pinegrow/nuxt-module',
    '@unocss/nuxt',
    '@nuxt/devtools',
    '@nuxtjs/html-validator',
  ],

  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },

  unocss: {
    presets: [
      presetIcons({
        prefix: 'i-', // default prefix, do not change
      }),
    ],
  },

  sourcemap: {
    client: false,
    server: false,
  },
})
