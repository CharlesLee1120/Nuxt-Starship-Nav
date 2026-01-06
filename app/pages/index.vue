<script setup lang="ts">
import { categories } from '~/data/sites'

useSeoMeta({
  title: 'Starship Nav - ',
  description: '一个简洁美观的导航站,收录常用工具、开发框架和设计资源。',
  ogTitle: 'Starship Nav - ',
  ogDescription: '一个简洁美观的导航站,收录常用工具、开发框架和设计资源。',
})

const { sortSitesByPin } = usePinnedSites()

/**
 * 搜索关键词状态
 * Search query state
 */
const searchQuery = ref('')

/**
 * 根据搜索关键词过滤后的分类列表,并将置顶站点排在前面
 * Filtered categories based on search query with pinned sites first
 *
 * @returns {Array} 过滤并排序后的分类列表
 */
const filteredCategories = computed(() => {
  let result = categories

  // 如果有搜索关键词,先进行过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = categories.map(category => {
      // 过滤分类下的站点
      const filteredSites = category.sites.filter(site =>
        site.title.toLowerCase().includes(query) ||
        site.desc.toLowerCase().includes(query) ||
        site.url.toLowerCase().includes(query)
      )

      // 返回包含过滤后站点的新分类对象
      return {
        ...category,
        sites: filteredSites
      }
    }).filter(category => category.sites.length > 0) // 只保留有匹配站点的分类
  }

  // 对每个分类的站点进行排序,置顶的站点排在前面
  return result.map(category => ({
    ...category,
    sites: sortSitesByPin(category.sites)
  }))
})

/**
 * 公告内容
 * Notice message
 */
const noticeMessage = ref('欢迎访问 Starship Nav!这是一个示例公告,将在 1 分钟后自动关闭。')
</script>

<template>
  <NoticeBar :message="noticeMessage" />
  <div class="container mx-auto px-4 py-8 space-y-12">
    <!-- Search Section -->
    <div class="max-w-2xl mx-auto mb-12 relative">
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative flex items-center bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-slate-200 dark:border-dark-border">
          <div class="pl-4 text-slate-400">
            <Icon name="ph:magnifying-glass-bold" class="text-xl" />
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索站点、描述或 URL..."
            class="w-full py-4 px-4 bg-transparent border-none focus:ring-0 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          <div v-if="searchQuery" class="pr-4 cursor-pointer text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" @click="searchQuery = ''">
            <Icon name="ph:x-circle-fill" class="text-xl" />
          </div>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <TransitionGroup name="list" tag="div" class="space-y-12">
      <section v-for="category in filteredCategories" :key="category.title" class="space-y-6">
        <div class="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-dark-border">
          <Icon v-if="category.icon" :name="category.icon" class="text-2xl text-primary-500" />
          <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
            {{ category.title }}
          </h2>
          <span class="text-sm text-slate-400 font-normal ml-auto">
            {{ category.sites.length }} 个站点
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <SiteCard
            v-for="site in category.sites"
            :key="site.url"
            :site="site"
          />
        </div>
      </section>
    </TransitionGroup>

    <!-- No Results State -->
    <div v-if="filteredCategories.length === 0" class="text-center py-20">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
        <Icon name="ph:magnifying-glass-duotone" class="text-3xl text-slate-400" />
      </div>
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white">未找到相关站点</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2">换个关键词试试看？</p>
    </div>
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
  width: 100%;
}
</style>
