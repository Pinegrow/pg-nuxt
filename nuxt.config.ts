// import { fileURLToPath, URL } from 'node:url'
import presetIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title: `Vue Designer`,
      description: 'Vue Designer Nuxt with CSS - Quick start template',
      author: 'Pinegrow',
      nav: [{ text: 'Home', link: '/' }],
    },
    app: {
      baseURL: '/',
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
})
