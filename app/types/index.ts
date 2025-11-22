export interface Site {
    title: string
    url: string
    desc: string
    icon?: string // Nuxt Icon name (e.g., 'logos:google-icon')
}

export interface Category {
    title: string
    icon?: string
    sites: Site[]
}
