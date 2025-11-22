<template>
  <header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-dark-border bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Icon name="ph:rocket-launch-duotone" class="text-2xl text-primary-500" />
        <h1 class="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          Starship Nav
        </h1>
      </div>
      <nav class="flex items-center gap-4">
        <ThemeToggle />
        <a href="https://github.com/CharlesLee1120/Nuxt-Starship-Nav" target="_blank" class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
          <Icon name="simple-icons:github" class="text-xl" />
        </a>
      </nav>
    </div>
  </header>
</template>
