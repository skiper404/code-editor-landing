<script setup>
const props = defineProps(["to", "type", "secondary"]);

const classes = computed(() => ({
  "px-8 bg-indigo-400 dark:bg-indigo-600 hover:bg-indigo-700":
    props.type === "button-primary",
  "px-8 bg-gray-600 hover:bg-gray-500": props.type === "button-secondary",
  "px-2": props.type === "icon",
}));
</script>

<template>
  <NuxtLink
    :to="to"
    :class="['flex items-center justify-center rounded-lg py-2', classes]"
  >
    <button>
      <slot />
    </button>
  </NuxtLink>
</template>
