import type { Site } from '~/types'

const STORAGE_KEY = 'starship-nav-pinned-sites'

/**
 * 全局置顶站点的 URL 集合(单例状态)
 * Global pinned site URLs set (singleton state)
 */
const pinnedSiteUrls = ref<Set<string>>(new Set())

/**
 * 标记是否已初始化
 * Flag to track if already initialized
 */
let isInitialized = false

/**
 * 从 localStorage 加载置顶站点
 * Load pinned sites from localStorage
 */
const loadPinnedSites = () => {
  if (import.meta.client && !isInitialized) {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const urls = JSON.parse(stored) as string[]
        pinnedSiteUrls.value = new Set(urls)
      }
      isInitialized = true
    } catch (error) {
      console.error('加载置顶站点失败:', error)
    }
  }
}

/**
 * 保存置顶站点到 localStorage
 * Save pinned sites to localStorage
 */
const savePinnedSites = () => {
  if (import.meta.client) {
    try {
      const urls = Array.from(pinnedSiteUrls.value)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(urls))
    } catch (error) {
      console.error('保存置顶站点失败:', error)
    }
  }
}

/**
 * 切换站点的置顶状态
 * Toggle pin status of a site
 * 
 * @param {string} url - 站点 URL
 */
const togglePin = (url: string) => {
  const newSet = new Set(pinnedSiteUrls.value)
  if (newSet.has(url)) {
    newSet.delete(url)
  } else {
    newSet.add(url)
  }
  pinnedSiteUrls.value = newSet
  savePinnedSites()
}

/**
 * 检查站点是否已置顶
 * Check if a site is pinned
 * 
 * @param {string} url - 站点 URL
 * @returns {boolean} 是否已置顶
 */
const isPinned = (url: string): boolean => {
  return pinnedSiteUrls.value.has(url)
}

/**
 * 对站点列表进行排序,置顶的站点排在前面
 * Sort sites array with pinned sites first
 * 
 * @param {Site[]} sites - 站点列表
 * @returns {Site[]} 排序后的站点列表
 */
const sortSitesByPin = (sites: Site[]): Site[] => {
  return [...sites].sort((a, b) => {
    const aIsPinned = isPinned(a.url)
    const bIsPinned = isPinned(b.url)
    
    if (aIsPinned && !bIsPinned) return -1
    if (!aIsPinned && bIsPinned) return 1
    return 0
  })
}

/**
 * 管理置顶站点的 composable
 * Composable for managing pinned sites
 */
export const usePinnedSites = () => {
  // 在客户端初始化时加载置顶站点
  onMounted(() => {
    loadPinnedSites()
  })

  return {
    pinnedSiteUrls: readonly(pinnedSiteUrls),
    togglePin,
    isPinned,
    sortSitesByPin,
    loadPinnedSites
  }
}
