<template>
  <div
    class="z-1 relative flex flex-1 flex-col overflow-hidden rounded-md bg-gray-800 p-4 hover:-translate-y-2 hover:shadow-lg motion-safe:transition-transform"
  >
    <NuxtLink
      class="group mb-4 text-xl font-semibold text-white"
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
    <h4 class="mb-4 text-xl font-semibold text-white" v-else>{{ title }}</h4>
    <div class="-m-1">
      <span
        v-for="(scope, index) in scopes"
        :key="index"
        class="m-1 inline-block rounded-lg bg-gray-900 px-2 py-1 text-sm text-white"
        >{{ scope }}</span
      >
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
