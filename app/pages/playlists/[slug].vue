<script setup>
const title = useRoute().params.slug.replaceAll("-", " ");
const lessonsStore = useLessonsStore();

const item = computed(() =>
  lessonsStore.lessonsData.find((item) => item?.title?.toLowerCase() === title),
);
</script>

<template>
  <section
    class="flex h-full flex-col gap-y-8 pt-24 pb-6 sm:gap-y-12 sm:py-16 dark:bg-gray-800 dark:text-white"
  >
    <AppTitle :title="item.title" :subtitle="item.description" />
    <div class="grid grid-cols-1 sm:grid-cols-5">
      <PlaylistVideos :videos="item.videos" />
      <div class="col-span-3 px-4">
        <LessonVideo />
        <LessonContent :content="item.content" />
      </div>
    </div>
  </section>
</template>
