<template>
  <section
    class="flex flex-col gap-y-8 bg-indigo-100 px-2 pt-30 pb-6 text-gray-500 sm:gap-y-12 sm:py-16 dark:bg-gray-800 dark:text-indigo-100"
  >
    <AppTitle
      title="Playlists"
      subtitle="Learn how to make VSCode work for you with our comprehensive guides and
        tutorials."
    />
    <div class="grid grid-cols-1 sm:grid-cols-6">
      <AppPlaylistTags />
      <AppPlaylist />
    </div>
  </section>
</template>
