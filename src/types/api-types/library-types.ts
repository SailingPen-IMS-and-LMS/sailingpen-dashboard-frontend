export type LibraryFolderStructure = LibraryFolderRecursiveBrief[]

export interface LibraryFolderRecursiveBrief {
  id: number
  name: string
  children: LibraryFolderRecursiveBrief[]
}

export type LibraryFolderChildrenFolders = LibraryFolderBrief[]

export interface LibraryRootFolder {
  root_folder_id: number
  children: LibraryFolderChildrenFolders
}

export interface LibraryFolderBrief {
  id: number
  name: string
}

export interface CreateFolderDto {
  name: string
  parent_folder_id: number
}
