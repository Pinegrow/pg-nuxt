<script setup lang="ts">
  import site from '@/site'
  import image from '@/screenshots/image.jpg'

  const link: any = [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.svg',
    },
  ]
  const noscript: any = []

  const { title, description, url } = site

  const route = useRoute()

  useServerSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogImageAlt: title,
    // og:image:width
    // og:image:height
    // og:image:alt
    // og:image: type
    // og:image: secure_url
    ogUrl: url,
    ogSiteName: title,
    // og: locale
    // og: type
  })

  useHead({
    title: computed(() => route.meta.title),
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${title}` : title
    },
    htmlAttrs: { lang: 'en-US' },
    meta: [
      { property: 'keywords', content: route.meta.tags?.toString() },
      { property: 'author', content: 'Pinegrow' },
    ],
    link,
    noscript,
  })
</script>

<template>
  <Head>
    <Meta name="twitter:title" :content="title" />
    <Meta name="twitter:description" :content="description" />
    <Meta name="twitter:image" :content="image" />
    <Meta name="twitter:image:alt" :content="title" />
    <Meta name="twitter:site" :content="url" />
    <Meta name="twitter:card" content="summary_large_image" />
    <!-- <Meta name="twitter:card" content="summary" /> -->
  </Head>
</template>
