<template>
  <NuxtLayout>
    <!-- <img src="https://poche24.wonderweb.ch/wp-content/uploads/2024/08/ScreenShot2019-03-21at14.52.26.png" alt="cahier_test-pdf" class="rounded" width="300" height="200" /> -->

      <NuxtImg
        src="https://poche24.wonderweb.ch/wp-content/uploads/2024/08/ScreenShot2019-03-21at14.52.26.png"
        :placeholder="[30,20]"
        width="300"
        height="200"
        class="rounded"
      />

      <br>
      <br>

    <!-- https://image.nuxt.com/usage/nuxt-img -->
    <figure class="mb-8">
      <NuxtImg
        src="/images/mountains_1.jpg"
        :placeholder="[30,20]"
        width="300"
        height="200"
        class="rounded"
      />
      <figcaption class="text-gray-600 text-xs mt-3">
        Photo by <a href="https://unsplash.com/@vorosbenisop" target="_blank" class="underline">Benjamin Voros</a> on <a href="https://unsplash.com/s/photos/mountain" target="_blank" class="underline">Unsplash</a>.
      </figcaption>
    </figure>
    <!-- https://image.nuxt.com/usage/nuxt-picture -->
    <figure>
      <NuxtPicture
        src="/images/mountains_2.jpg"
        width="3750"
        height="2500"
        sizes="xs:200px md:500px lg:1024"
      />
      <figcaption class="text-gray-600 text-xs mt-3">
        Photo by <a href="https://unsplash.com/@kydroon" target="_blank" class="underline">Kurt Cotoaga</a> on <a href="https://unsplash.com/s/photos/mountain" target="_blank" class="underline">Unsplash</a>.
      </figcaption>
    </figure>
  </NuxtLayout>
</template>
