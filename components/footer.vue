<template>
  <div class="mt-8 pb-4 text-center text-sm text-gray-400">
    <div class="mx-auto max-w-screen-md">
      Copyright © 2022 Luca Voges -
      <NuxtLink to="/imprint" class="hover:text-gray-200 transition-colors">Impressum & Datenschutz</NuxtLink>
      <div class="relative mt-4 pt-4">
        <div
          class="absolute left-1/2 top-0 -ml-4 h-[1px] w-8 bg-gray-300"
        ></div>
        Built with
        <NuxtLink
          to="https://nuxt.com"
          target="_blank"
          class="hover:text-gray-200 transition-colors"
        >
          Nuxt 3
          <client-only>
            <font-awesome-icon :icon="['fab', 'vuejs']" />
          </client-only> </NuxtLink
        >,
        <NuxtLink
          to="https://tailwindcss.com"
          target="_blank"
          class="hover:text-gray-200 transition-colors"
        >
          tailwindcss
          <client-only>
            <font-awesome-icon :icon="['fas', 'palette']" />
          </client-only>
          </NuxtLink
        >
        &
        <NuxtLink
          to="https://fontawesome.com"
          target="_blank"
          class="hover:text-gray-200 transition-colors"
        >
          fontawesome
          <client-only>
            <font-awesome-icon :icon="['fab', 'font-awesome']" />
          </client-only>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
