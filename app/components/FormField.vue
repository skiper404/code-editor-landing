<script setup>
import { capitalize } from "vue";

defineProps(["id", "type", "placeholder"]);
</script>

<template>
  <label :for="id">{{ id }}</label>
  <input
    :id="id"
    :type="type"
    :placeholder="capitalize(type)"
    class="rounded-lg bg-indigo-300 px-4 py-2 outline-none focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-700"
  />
</template>
