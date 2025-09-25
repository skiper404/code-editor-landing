<script setup>
defineProps(["data"]);
</script>

<template>
  <ul class="flex w-full items-center justify-evenly">
    <li v-for="{ title, linksList } in data">
      <h2 class="font-medium">{{ title }}</h2>
      <ul class="mt-2">
        <li v-for="link in linksList">
          <NuxtLink class="cursor-pointer hover:text-indigo-500">
            {{ link }}
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>
