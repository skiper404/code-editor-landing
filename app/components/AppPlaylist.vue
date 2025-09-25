<script setup>
const lessonsStore = useLessonsStore();

const slugify = (str) => str.toLowerCase().replaceAll(" ", "-");
</script>

<template>
  <div
    class="grid cursor-pointer grid-cols-1 gap-4 px-4 sm:col-span-4 md:grid-cols-2 lg:col-span-5 lg:grid-cols-3 xl:grid-cols-4"
  >
    <article
      v-for="{ title, description, tags } in lessonsStore.lessonsData"
      class="flex h-full flex-col rounded-xl border border-gray-300 p-6 hover:border-indigo-600 dark:border-indigo-600 dark:hover:border-red-600"
    >
      <NuxtLink :to="`playlists/${slugify(title)}`">
        <header>
          <h3 class="text-lg font-semibold">{{ title }}</h3>
        </header>
        <p class="mt-2 mb-6">
          {{ description }}
        </p>
        <footer class="mt-auto">
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="tag in tags"
              class="rounded-xl bg-indigo-200 px-3 py-1 text-indigo-600 dark:bg-indigo-600 dark:text-white"
            >
              {{ tag }}
            </li>
          </ul>
        </footer>
      </NuxtLink>
    </article>
  </div>
</template>
