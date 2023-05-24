import { PostItem } from "../PostItem/PostItem";
import { IpostList, Post } from "./PostList.interface";
import styles from './PostList.module.scss';

export const PostList: React.FC<IpostList> = ({ title, posts, removePost }): JSX.Element => {
  return (
    <div className={styles.postListWrapper}>
      <h2 className={styles.postListWrapperTitle}>Тема: {title}</h2>
      <div className="flex flex-col gap-5">
        {posts.map((obj: Post, index: number) => (
          <PostItem count={index + 1} post={obj} removePost={removePost}/>
        ))}
      </div>
    </div>
  );
};
