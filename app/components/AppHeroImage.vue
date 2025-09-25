<script setup>
import codeDarkImage from "../../public/images/code_dark.png";
import codeLightImage from "../../public/images/code_light.png";
</script>

<template>
  <div class="relative mt-6 w-2/3 lg:mt-0">
    <div
      class="absolute -inset-2 top-10 left-10 rotate-z-3 rounded-xl border-4 border-violet-500 bg-gradient-to-l from-pink-300 to-blue-500 dark:from-violet-900 dark:to-indigo-600"
    ></div>
    <img
      :src="codeLightImage"
      alt="Editor UI"
      class="block rotate-z-3 rounded-2xl pt-5 dark:hidden"
    />
    <img
      :src="codeDarkImage"
      alt="Editor UI"
      class="hidden rotate-z-3 rounded-2xl pt-5 dark:block"
    />
  </div>
</template>
