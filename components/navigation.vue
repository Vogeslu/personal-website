<template>
  <div class="relative flex h-20 items-center bg-gray-800">
    <div
      class="ml-2 flex h-16 w-16 cursor-pointer items-center justify-center rounded-xl hover:bg-gray-900/30 md:hidden"
      @click="menuOpened = !menuOpened"
    >
      <client-only>
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="text-2xl text-gray-100"
        />
      </client-only>
    </div>
    <div
      class="absolute top-[5.5rem] right-2 left-2 z-10 mx-auto max-w-screen-md items-start justify-start rounded-lg bg-gray-800 pr-8 shadow motion-safe:transition-all md:relative md:top-0 md:left-0 md:right-0 md:flex md:h-full md:w-auto md:translate-y-0 md:flex-row md:items-center md:justify-center md:rounded-none md:bg-transparent md:pr-0 md:shadow-none"
      :class="
        menuOpened
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-2 opacity-0 md:pointer-events-auto md:opacity-100'
      "
    >
      <NuxtLink
        v-for="(item, index) in items"
        @key="index"
        :to="item.href"
        class="group mx-4 block cursor-pointer border-b-2 border-b-transparent px-1 py-4 text-gray-400 transition-all hover:text-gray-200 md:py-0 md:hover:border-b-gray-400 md:hover:py-2"
        :class="
          $route.path == item.href
            ? 'text-gray-200 md:border-b-gray-400 md:py-2'
            : ''
        "
        ><client-only>
          <font-awesome-icon
            :icon="item.icon"
            class="mr-3 text-xl opacity-50 transition-opacity group-hover:opacity-100"
            :class="$route.path == item.href ? 'opacity-100' : ''"
          />
        </client-only>
        <span class="text-lg font-bold">{{ item.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
interface Item {
  name: string;
  icon: string[];
  href: string;
}

export default {
  data() {
    return {
      items: [
        {
          name: "Über mich",
          icon: ["fas", "user"],
          href: "/",
        },
        {
          name: "Projekte",
          icon: ["fas", "code"],
          href: "/projects",
        },
        {
          name: "Kontakt",
          icon: ["fas", "envelope"],
          href: "/contact",
        },
      ] as Item[],
      menuOpened: false,
    };
  },
  watch: {
    $route() {
      this.menuOpened = false;
    },
  },
};
</script>
