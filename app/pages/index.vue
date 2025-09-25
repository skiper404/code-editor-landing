<script setup></script>

<template>
  <section
    class="flex flex-col items-center pt-24 pb-10 sm:pt-20 sm:pb-40 dark:bg-gray-800"
  >
    <AppHeroTitle />
    <AppHeroLinksBar />
    <AppHeroImage />
  </section>
  <section
    class="flex flex-col gap-8 bg-indigo-200 py-8 text-indigo-50 sm:gap-12 lg:py-8 dark:bg-gray-900"
  >
    <AppTitle
      title="Unlock the full potential"
      subtitle="With tailored settings, keyboard shortcuts, and powerfull extensions,
          you can work smarter and faster."
    />
    <AppFeatures />
  </section>
  <section
    class="flex flex-col items-center py-8 sm:py-16 dark:bg-gray-800 dark:text-white"
  >
    <AppTitle
      title="Stay Updated"
      subtitle=" Subscribe to our newsletters for the latest updates and tips."
    />
    <AppHeroForm />
  </section>
</template>
