<template>
  <footer class="border-t border-slate-200 dark:border-dark-border mt-auto py-8 bg-white dark:bg-dark-bg">
    <div class="container mx-auto px-4 text-center text-slate-500 dark:text-slate-400">
      <p class="flex items-center justify-center gap-1">
        Made with <Icon name="ph:heart-fill" class="text-red-500" /> by Nuxt 4
      </p>
      <p class="text-sm mt-2">
        &copy; {{ new Date().getFullYear() }} Starship Nav. All rights reserved.
      </p>
    </div>
  </footer>
</template>
