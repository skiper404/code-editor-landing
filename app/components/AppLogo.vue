<script setup>
defineProps(["iconClasses"]);
</script>

<template>
  <div class="flex items-center gap-2 text-2xl font-bold">
    <Icon
      name="heroicons:code-bracket-square-16-solid"
      class="size-12 -rotate-12 text-indigo-100 dark:text-indigo-500"
    />
    <span>
      <slot />
    </span>
  </div>
</template>
