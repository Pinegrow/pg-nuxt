<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description:
      "Unlock the Web's Potential with Nuxt: Building Tomorrow's Today!",
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  const { optimizeImage } = useOptimizeImage()
  const heroImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      heroImageUrl,
      /* options */
      {
        // placeholder: false, // placeholder image before the actual image is fully loaded.
      },
      true /* return bgStyles */,
    ),
  }

  const heroImage = heroImageOptimized.src
  const bgStyles = heroImageOptimized.bgStyles
</script>
<template>
  <div>
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 1.5rem /* 24px */;
        padding-bottom: 1.5rem /* 24px */;
      "
    >
      <span>A Fresh Start!</span>
    </div>
  </div>
</template>
<style scoped></style>
