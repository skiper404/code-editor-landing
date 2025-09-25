<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <AppButton type="icon" @click="toggleDark()">
    <Icon v-if="isDark" name="heroicons:sun-16-solid" class="size-6" />
    <Icon v-if="!isDark" name="heroicons:moon-16-solid" class="size-6" />
  </AppButton>
</template>
