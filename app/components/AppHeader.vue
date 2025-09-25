<script setup>
const isShowMobileMenu = ref(false);

const openMobileMenu = () => {
  isShowMobileMenu.value = true;
};

const closeMobileMenu = () => {
  isShowMobileMenu.value = false;
};
</script>

<template>
  <header
    class="fixed z-10 flex h-16 w-full flex-col justify-center bg-indigo-500 sm:static dark:bg-gray-900"
  >
    <div class="flex items-center justify-between gap-8 px-4 sm:px-8">
      <NuxtLink to="/" class="flex items-center sm:gap-2">
        <AppLogo icon-classes="size-10">Code Editor</AppLogo>
      </NuxtLink>

      <!-- desktop Nav -->
      <nav class="hidden flex-1 sm:block">
        <ul class="flex items-center gap-4">
          <li class="mr-auto">
            <AppHeaderNavLink to="/playlists">Library</AppHeaderNavLink>
          </li>
          <li>
            <AppHeaderThemeSwitcher />
          </li>
          <li>
            <AppHeaderNavLink to="/login">Sign In</AppHeaderNavLink>
          </li>
          <li>
            <AppButton to="/register" type="button-primary">Sign Up</AppButton>
          </li>
        </ul>
      </nav>

      <!-- Mobile Nav -->
      <nav
        v-if="isShowMobileMenu"
        class="absolute top-full right-0 left-0 rounded-b-xl border-gray-300 bg-indigo-300 sm:border-0 dark:border-gray-700 dark:bg-gray-900"
      >
        <ul class="flex flex-col items-center gap-2 p-2">
          <li class="w-full">
            <NuxtLink
              to="playlists"
              class="inline-block w-full rounded p-2 text-center hover:bg-indigo-500 dark:text-white dark:hover:bg-gray-600"
              @click="closeMobileMenu"
              >Library</NuxtLink
            >
          </li>
          <li class="w-full">
            <NuxtLink
              to="login"
              class="inline-block w-full rounded p-2 text-center hover:bg-indigo-500 dark:text-white dark:hover:bg-gray-600"
              @click="closeMobileMenu"
              >Sign In</NuxtLink
            >
          </li>
          <li class="w-full">
            <NuxtLink
              to="register"
              class="inline-block w-full rounded bg-indigo-500 p-2 text-center hover:bg-indigo-500 dark:text-white dark:hover:bg-gray-600"
              @click="closeMobileMenu"
              >Sign Up</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <AppHeaderThemeSwitcher class="sm:hidden" />
      <AppButton
        v-if="isShowMobileMenu"
        type="icon"
        class="sm:hidden"
        @click="closeMobileMenu"
      >
        <Icon name="heroicons:x-mark-20-solid" class="size-8" />
      </AppButton>
      <AppButton
        v-if="!isShowMobileMenu"
        type="icon"
        class="sm:hidden"
        @click="openMobileMenu"
      >
        <Icon name="heroicons:bars-3" class="size-8" />
      </AppButton>
    </div>
  </header>
</template>
