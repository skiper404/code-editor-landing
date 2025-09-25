<script setup></script>

<template>
  <form class="mt-5 flex justify-center gap-4">
    <input
      type="email"
      class="rounded-xl border border-gray-500 px-3 text-indigo-400 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-0 dark:text-indigo-100"
      placeholder="Your Email"
    />
    <AppButton type="button-primary">
      <Icon name="heroicons:paper-airplane-solid" class="size-6 sm:hidden" />
      <span class="hidden sm:inline-block"> Subscribe </span>
    </AppButton>
  </form>
</template>

<style></style>
