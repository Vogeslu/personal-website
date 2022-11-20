<template>
  <div class="flex min-h-screen flex-col">
    <Navigation />
    <div class="flex flex-1 items-center justify-center"><slot /></div>
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    useHead({
      bodyAttrs: {
        class: "bg-gray-900",
      },
    });
  },
};
</script>
