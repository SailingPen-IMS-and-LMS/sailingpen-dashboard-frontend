export type LibraryFolderStructure = LibraryFolderRecursiveBrief[]

export interface LibraryFolderRecursiveBrief {
  id: number
  name: string
  children: LibraryFolderRecursiveBrief[]
}

export type LibraryFolderChildrenFolders = LibraryFolderBrief[]

export interface LibraryRootFolder {
  root_folder_id: number
  folders: LibraryFolderChildrenFolders
}

export interface LibraryFolderBrief {
  id: number
  name: string
}

export interface CreateFolderDto {
  name: string
  parent_folder_id: number
}

export enum ResourceType {
  IMAGE = 'image',
  VIDEO = 'video',
  DOCUMENT = 'document',
}

export interface Resource {
  id: number
  name: string
  type: ResourceType
}

export interface CreateImageOrDocumentResourceCreateDto {
  file: File
}

export interface ResourceResult {
  folder_id: number
  id: number
  name: string
  type: ResourceType | 'image' | 'video' | 'document'
  url: string
}

export type ResourceResults = ResourceResult[]
