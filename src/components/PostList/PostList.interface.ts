export interface Post {
  title: string
  body: string
  id: number
}

export interface IpostList {
  title: string
  posts: Post[]
  removePost: (id: number) => void
}