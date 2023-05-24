import { Post } from "../PostList/PostList.interface"

export interface IPostItem {
  count: number
  post: Post
  removePost: (id: number) => void
}

