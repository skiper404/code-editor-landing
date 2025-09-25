<script setup>
defineProps(["videos"]);
</script>

<template>
  <div class="bg col-span-2 flex flex-col gap-y-4 px-4">
    <div class="flex items-center justify-between gap-x-4">
      <h3 class="text-lg font-semibold">Lessons</h3>
      <div class="flex gap-2">
        <NuxtLink to="https://prettier.io" target="_blank">
          <Icon name="heroicons:globe-alt-solid" class="size-6" />
        </NuxtLink>
        <NuxtLink to="https://youtube.com" target="_blank">
          <Icon name="heroicons:code-bracket-16-solid" class="size-6" />
        </NuxtLink>
      </div>
    </div>
    <ul class="flex flex-col gap-4">
      <li v-for="(lesson, index) in videos">
        <NuxtLink
          to=""
          class="flex w-full justify-between gap-4 rounded-lg bg-indigo-400 p-2 dark:bg-gray-700"
        >
          <span>
            {{ index + 1 }}.
            {{ lesson.title }}
          </span>
          <span>{{ lesson.videoDuration }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
