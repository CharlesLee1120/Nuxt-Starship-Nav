export interface Site {
    title: string
    url: string
    desc: string
    icon?: string // Nuxt Icon name (e.g., 'logos:google-icon')
    id?: string // 唯一标识符,用于置顶等功能
}

export interface Category {
    title: string
    icon?: string
    sites: Site[]
}
