<script setup>
const featuresInfo = [
  {
    icon: "heroicons:cog-6-tooth-solid",
    title: "Setting",
    description:
      "Personalize your workspace to math your unique coding style and preferences effortlessly.",
  },
  {
    icon: "heroicons:fire-solid",
    title: "Keyboard shortcats",
    description:
      "Streamline your workflow with essentioal shortcuts that save you time and boost your skills.",
  },
  {
    icon: "heroicons:puzzle-piece-solid",
    title: "Extentions",
    description:
      "Expand your capabilities with powerfull wxtensions tailored to enhance your coding experirnce.",
  },
];
</script>

<template>
  <div class="grid gap-5 px-4 text-indigo-400 sm:gap-8 sm:px-20 lg:grid-cols-3">
    <NuxtLink v-for="{ icon, title, description } in featuresInfo" to="/">
      <article
        class="h-full rounded-xl border border-gray-200 bg-white p-4 hover:border-indigo-500 dark:border-indigo-700/70 dark:bg-gray-800 dark:text-indigo-100"
      >
        <header class="flex flex-col gap-3">
          <Icon :name="icon" class="size-12 text-indigo-500" />
          <h3 class="py-2 font-bold">{{ title }}</h3>
        </header>
        <p class="text-lg font-extralight">
          {{ description }}
        </p>
      </article>
    </NuxtLink>
  </div>
</template>
