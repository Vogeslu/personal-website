<template>
  <div class="mx-auto w-full max-w-screen-md px-4 py-8 text-gray-100">
    <h1
      class="mb-6 border-b-2 border-b-gray-800 px-2 pb-3 text-3xl font-semibold text-gray-100"
    >
      Kontakt aufnehmen
    </h1>
    <p class="mb-8 text-lg">
      Gerne kannst Du mich per E-Mail kontaktieren. Ich versuche
      schnellstmöglich auf Deine Nachricht zu antworten!
    </p>
    <NuxtLink
      to="mailto:info@sociant.de"
      class="inline-flex items-center text-xl"
    >
      <client-only>
        <font-awesome-icon :icon="['fas', 'envelope']" class="mr-3 text-2xl" />
      </client-only>
      E-Mail
    </NuxtLink>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    useHead({
      title: "Kontakt - Luca Voges",
    });
  },
};
</script>
