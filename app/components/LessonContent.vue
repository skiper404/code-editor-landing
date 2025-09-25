<script setup lang="ts">
defineProps(["content"]);
</script>

<template>
  <p class="mt-5 text-gray-500 dark:text-indigo-100">
    {{ content }}
  </p>
</template>
