<template>
  <div
    class="relative flex flex-col overflow-hidden rounded-md bg-gray-800 pt-24 hover:-translate-y-2 hover:shadow-lg motion-safe:transition-transform"
  >
    <div
      v-if="image"
      class="absolute top-0 left-0 z-0 h-32 w-full bg-cover bg-center"
      :style="{ backgroundImage: `url('${image}')` }"
    >
      <div
        class="absolute h-32 w-full bg-gradient-to-t from-gray-800 to-gray-800/30"
      ></div>
    </div>
    <div class="z-1 relative flex flex-1 flex-col p-4">
      <NuxtLink
        class="group text-2xl font-semibold text-white"
        v-if="url"
        :to="url"
        :external="true"
        target="_blank"
      >
        {{ title }}
        <client-only>
          <font-awesome-icon
            class="pb-1 text-sm opacity-50 transition-opacity group-hover:opacity-50 md:opacity-0"
            :icon="['fas', 'chain']"
          />
        </client-only>
      </NuxtLink>
      <h3 class="text-2xl font-semibold text-white" v-else>{{ title }}</h3>
      <p class="mt-2 mb-6 flex-1 text-white/80">{{ description }}</p>
      <div class="-m-1">
        <span
          v-for="(scope, index) in scopes"
          :key="index"
          class="m-1 inline-block rounded-lg bg-gray-900 px-2 py-1 text-sm text-white"
          >{{ scope }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    scopes: {
      type: Array,
      required: false,
    },
  },
};
</script>
