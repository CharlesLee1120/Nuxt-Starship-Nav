<script setup lang="ts">
import type { Site } from '~/types'

const props = defineProps<{
  site: Site
}>()

const { togglePin, isPinned } = usePinnedSites()

/**
 * 当前站点是否已置顶
 * Whether the current site is pinned
 */
const pinned = computed(() => isPinned(props.site.url))

/**
 * 处理置顶按钮点击事件
 * Handle pin button click
 * 
 * @param {Event} event - 点击事件
 */
const handlePinClick = (event: Event) => {
  event.preventDefault()
  event.stopPropagation()
  togglePin(props.site.url)
}
</script>

<template>
  <div class="relative group/card">
    <!-- 置顶按钮 -->
    <button
      @click="handlePinClick"
      class="absolute top-2 right-2 z-10 w-8 h-8 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center opacity-0 group-hover/card:opacity-100 hover:scale-110 transition-all duration-200"
      :class="{ '!opacity-100': pinned }"
      :title="pinned ? '取消置顶' : '置顶'"
    >
      <Icon 
        :name="pinned ? 'ph:push-pin-fill' : 'ph:push-pin'" 
        class="text-lg transition-colors"
        :class="pinned ? 'text-primary-500' : 'text-slate-400 hover:text-primary-500'"
      />
    </button>

    <!-- 站点卡片 -->
    <a 
      :href="site.url" 
      target="_blank" 
      rel="noopener noreferrer"
      class="glass-card group flex items-start gap-4 p-4 rounded-xl hover:-translate-y-1 block"
    >
      <div class="shrink-0 w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl">
        <Icon v-if="site.icon" :name="site.icon" class="text-slate-600 dark:text-slate-300 group-hover:scale-110 transition-transform" />
        <span v-else class="text-slate-400 font-bold">{{ site.title.charAt(0) }}</span>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <h3 class="font-semibold text-slate-900 dark:text-white truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {{ site.title }}
          </h3>
          <Icon 
            v-if="pinned" 
            name="ph:push-pin-fill" 
            class="text-primary-500 text-sm shrink-0"
          />
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
          {{ site.desc }}
        </p>
      </div>
    </a>
  </div>
</template>
