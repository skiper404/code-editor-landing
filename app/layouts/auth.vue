<template>
  <div class="min-h-screen bg-indigo-100 text-white dark:bg-gray-800">
    <div
      class="fixed z-10 flex h-16 w-full items-center justify-between bg-indigo-500 sm:static dark:bg-gray-900"
    >
      <NuxtLink to="/">
        <AppLogo
          class="flex items-center gap-2 px-8 text-2xl font-bold"
          icon-classes="text-indigo-500 size-12"
          >Code Editor</AppLogo
        >
      </NuxtLink>
      <AppHeaderThemeSwitcher />
    </div>
    <slot></slot>
  </div>
</template>
