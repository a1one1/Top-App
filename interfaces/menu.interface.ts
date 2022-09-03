export interface PageItem {
    alias: string
    title: string
    _id: string
    category: string
}

export interface IMenuItem {
    _id: {
        secondCategory: string
    },
    pages: PageItem[]
}