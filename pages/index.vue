<template>
  <div class="px-4 py-8 text-gray-100">
    <h1 class="mb-2 text-4xl font-bold">Luca Voges</h1>
    <p class="mb-12 text-xl text-gray-300">Web- & App-Entwickler aus Erfurt</p>

    <p class="mb-6 text-lg">
      <client-only>
        <font-awesome-icon
          :icon="['fas', 'laptop-code']"
          class="mr-2 min-w-[2rem] text-xl"
        />
      </client-only>
      Tätig als Freelancer seit 2017
    </p>
    <p class="mb-6 text-lg">
      <client-only>
        <font-awesome-icon
          :icon="['fas', 'globe']"
          class="mr-2 min-w-[2rem] text-xl"
        />
      </client-only>
      Entwickler bei <b>designfanatics UG</b> für
      <NuxtLink
        to="https://findd.de"
        target="_blank"
        class="underline decoration-dotted underline-offset-4"
        >findd.de</NuxtLink
      >
    </p>
    <p class="mb-6 text-lg">
      <client-only>
        <font-awesome-icon
          :icon="['fas', 'code']"
          class="mr-2 min-w-[2rem] text-xl"
        />
      </client-only>
      Alle meine Projekte?
      <NuxtLink
        to="/projects"
        class="underline decoration-dotted underline-offset-4"
        >Hier klicken</NuxtLink
      >
    </p>
    <p class="text-lg">
      <client-only>
        <font-awesome-icon
          :icon="['fas', 'hand-wave']"
          class="mr-2 min-w-[2rem] text-xl"
        />
      </client-only>
      Kontakt aufnehmen?
      <NuxtLink
        to="/contact"
        class="underline decoration-dotted underline-offset-4"
        >Ganz einfach</NuxtLink
      >
    </p>

    <div class="mt-14">
      <h2 class="mb-6 text-2xl font-semibold">Weitere Links</h2>
      <div class="-m-2 text-gray-300">
        <NuxtLink
          to="https://github.com/Vogeslu"
          target="_blank"
          class="m-2 inline-flex items-center"
        >
          <client-only>
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="mr-1 min-w-[2rem]"
            />
          </client-only>
          GitHub (Privat)
        </NuxtLink>
        <NuxtLink
          to="https://github.com/Sociant"
          target="_blank"
          class="m-2 inline-flex items-center"
        >
          <client-only>
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="mr-1 min-w-[2rem]"
            />
          </client-only>
          GitHub (Sociant WD)
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
