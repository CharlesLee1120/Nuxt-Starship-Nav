<script setup lang="ts">
const show = ref(false)

const checkScroll = () => {
  show.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition name="fade">
    <button
      v-if="show"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border border-slate-200 dark:border-dark-border shadow-lg text-primary-500 hover:bg-primary-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
      aria-label="Back to top"
    >
      <Icon name="ph:arrow-up-bold" class="text-xl" />
    </button>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
