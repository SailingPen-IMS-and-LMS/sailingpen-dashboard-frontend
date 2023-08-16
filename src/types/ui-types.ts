export interface SidebarItem {
  to: string
  text: string
}
export interface ResourceInfoCard {
  id: number
  title: string
  image: string
  description: string
  date: string
  // obj array call attachments and it has id and link
  attachments: { id: number; link: string; text: string }[]
}

export type SidebarItems = SidebarItem[]
