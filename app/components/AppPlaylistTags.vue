<script setup>
const lessonsStore = useLessonsStore();
</script>

<template>
  <div class="flex flex-col gap-y-6 sm:col-span-2 lg:col-span-1">
    <input
      type="search"
      placeholder="Playlist title"
      class="focus:ring-none rounded-xl border border-gray-300 px-4 py-2 outline-0 focus:border-indigo-700"
    />
    <div class="flex flex-col gap-2">
      <h3 class="pl-6 font-bold">Tags</h3>
      <ul class="flex flex-col gap-2 font-extralight">
        <li>
          <AppButton
            v-for="tag in lessonsStore.lessonsTags"
            :class="[
              'rounded-xl text-sm hover:bg-gray-300 sm:w-full dark:hover:bg-gray-700',
              {
                'bg-indigo-200 dark:bg-gray-700':
                  tag === lessonsStore.activeTag,
              },
            ]"
            @click="lessonsStore.setActiveTag(tag)"
          >
            {{ tag }}
          </AppButton>
        </li>
      </ul>
    </div>
  </div>
</template>
