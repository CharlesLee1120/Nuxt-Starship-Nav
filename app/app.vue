<script setup lang="ts">
import '~/assets/css/main.css'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-sans">
    <TheHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <TheFooter />
    <BackToTop />
  </div>
</template>
