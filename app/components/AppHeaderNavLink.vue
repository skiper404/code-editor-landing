<script setup>
const props = defineProps(["to"]);
</script>

<template>
  <NuxtLink :to="to" class="hover:text-indigo-600 dark:text-indigo-100">
    <slot />
  </NuxtLink>
</template>
