<script setup>
const footerInfo = [
  {
    title: "Popular playlists",
    linksList: ["Prettier", "GitLens", "Live Share"],
  },
  { title: "Configuration", linksList: ["Settings", "Keybinding", "Snippets"] },
  { title: "Social", linksList: ["Youtube", "Telegram", "GitHub"] },
];
</script>

<template>
  <footer
    class="grid grid-cols-1 bg-indigo-900 py-2 font-extralight text-white sm:grid-cols-2 sm:px-4 sm:pt-10 dark:bg-gray-900"
  >
    <AppFooterHeader />
    <AppFooterLinksBar :data="footerInfo" />
    <AppFooterCopyright class="sm:col-span-2" />
  </footer>
</template>
