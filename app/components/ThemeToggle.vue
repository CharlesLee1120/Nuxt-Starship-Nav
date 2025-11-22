<script setup lang="ts">
const colorMode = useColorMode()
const showMenu = ref(false)

const themes = [
  { name: 'system', icon: 'ph:desktop-duotone', label: '跟随系统' },
  { name: 'light', icon: 'ph:sun-duotone', label: '浅色模式' },
  { name: 'dark', icon: 'ph:moon-duotone', label: '深色模式' }
]

const currentThemeIcon = computed(() => {
  const theme = themes.find(t => t.name === colorMode.preference)
  return theme?.icon || 'ph:desktop-duotone'
})

const setTheme = (theme: string) => {
  colorMode.preference = theme
  showMenu.value = false
}

// Click outside to close
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.theme-toggle')) {
      showMenu.value = false
    }
  })
})
</script>

<template>
  <div class="relative theme-toggle">
    <button 
      @click="showMenu = !showMenu"
      class="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle theme"
    >
      <Icon :name="currentThemeIcon" class="text-xl" />
    </button>

    <Transition name="scale">
      <div 
        v-if="showMenu"
        class="absolute right-0 top-full mt-2 w-36 py-1 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-xl z-50 overflow-hidden"
      >
        <button
          v-for="theme in themes"
          :key="theme.name"
          @click="setTheme(theme.name)"
          class="w-full px-4 py-2 text-left flex items-center gap-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          :class="colorMode.preference === theme.name ? 'text-primary-500 font-medium' : 'text-slate-600 dark:text-slate-300'"
        >
          <Icon :name="theme.icon" class="text-lg" />
          {{ theme.label }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
