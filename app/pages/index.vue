<script setup lang="ts">
import { categories } from '~/data/sites'

useSeoMeta({
  title: 'Starship Nav - 开发者导航',
  description: '一个简洁美观的开发者导航站，收录常用工具、开发框架和设计资源。',
  ogTitle: 'Starship Nav - 开发者导航',
  ogDescription: '一个简洁美观的开发者导航站，收录常用工具、开发框架和设计资源。',
})
</script>

<template>
  <div class="container mx-auto px-4 py-8 space-y-12">
    <section v-for="category in categories" :key="category.title" class="space-y-6">
      <div class="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-dark-border">
        <Icon v-if="category.icon" :name="category.icon" class="text-2xl text-primary-500" />
        <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
          {{ category.title }}
        </h2>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <SiteCard 
          v-for="site in category.sites" 
          :key="site.url" 
          :site="site" 
        />
      </div>
    </section>
  </div>
</template>
