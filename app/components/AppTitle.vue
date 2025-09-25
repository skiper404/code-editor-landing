<script setup>
defineProps(["title", "subtitle"]);
</script>

<template>
  <div class="mx-auto max-w-screen-sm text-indigo-500 dark:text-indigo-200">
    <h2 class="text-center text-2xl font-bold capitalize sm:text-4xl">
      {{ title }}
    </h2>
    <p class="mt-2 px-4 text-center font-extralight sm:mt-2 sm:text-lg">
      {{ subtitle }}
    </p>
  </div>
</template>
