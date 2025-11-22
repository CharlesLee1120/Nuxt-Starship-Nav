<script setup lang="ts">
import type { Site } from '~/types'

defineProps<{
  site: Site
}>()
</script>

<template>
  <a 
    :href="site.url" 
    target="_blank" 
    rel="noopener noreferrer"
    class="glass-card group flex items-start gap-4 p-4 rounded-xl hover:-translate-y-1"
  >
    <div class="shrink-0 w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl">
      <Icon v-if="site.icon" :name="site.icon" class="text-slate-600 dark:text-slate-300 group-hover:scale-110 transition-transform" />
      <span v-else class="text-slate-400 font-bold">{{ site.title.charAt(0) }}</span>
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="font-semibold text-slate-900 dark:text-white truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {{ site.title }}
      </h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
        {{ site.desc }}
      </p>
    </div>
  </a>
</template>
