<script setup>
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <section class="flex flex-col items-center gap-6 pt-20">
    <NuxtLink to="/">
      <Icon
        name="heroicons:code-bracket-square-16-solid"
        class="size-12 -rotate-12 text-indigo-500"
      />
    </NuxtLink>
    <div
      class="w-full rounded-lg bg-indigo-200 p-6 sm:w-fit dark:border-none dark:bg-gray-900"
    >
      <form action="" class="flex flex-col gap-4">
        <FormField id="Email" type="email" />
        <FormField id="Password" type="password" />
        <AppButton type="button-primary">Sign In</AppButton>
      </form>
      <p class="mt-8 text-center text-sm">
        Don't have an account?
        <NuxtLink to="register" class="text-indigo-500 hover:text-indigo-700"
          >Sign Up</NuxtLink
        >
      </p>
    </div>
  </section>
</template>
