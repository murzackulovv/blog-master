import React, { useState } from "react";
import { PostList } from "./components/PostList/PostList";
import { Form } from "./components/Form/Form";

interface IPost {
  id: number;
  title: string;
  body: string;
}

interface IAppProps {
  addNewPost: (postObj: IPost) => void;
  searchPosts: (searchText: string) => void;
  removePost: (id: number) => void;
}

export const App: React.FC = (): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([
    {
      id: 1,
      title: "Зачем редактору хвалить авторов и как в этом не налажать",
      body:
        "За пару дней я оставила штук 20 комплиментов авторам, с которыми работаю. Наивно верю, что это помогает авторско-редакторской команде работать слаженнее и без влажных платочков в кабинете психолога. Но даже тут есть правила: за что хвалить и как, чтобы оставаться редактором, а не превратиться в подружку по переписке.",
    },
  ]);

  //! Создание состояние для хранения текста в поиске
  const [searchText, setSearchText] = useState("");

  const addNewPost = (postObj: IPost) => {
    setPosts([...posts, postObj]);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  //! Обнавление состояние текста поиска, функция searchPosts принимает текст поиска в качестве аргумента и обновляет состояние searchText с помощью setSearchText
  const searchPosts = (searchText: string) => {
    setSearchText(searchText);
  };

  //! Филтрация постов на основе текста поиска 
  //! Мы создаем переменную filteredPosts, которая содержит отфильтрованный список постов. Если searchText не является пустым, мы фильтруем посты на основе текста поиска. Мы преобразуем заголовок и содержимое каждого поста в нижний регистр и сравниваем с searchTerm. Если заголовок или содержимое поста содержат searchTerm, они будут включены в отфильтрованный список.
  const filteredPosts = searchText
    ? posts.filter((post) => {
        const postTitle = post.title.toLowerCase();
        const postBody = post.body.toLowerCase();
        const searchTerm = searchText.toLowerCase();

        return postTitle.includes(searchTerm) || postBody.includes(searchTerm);
      })
    : posts;

  return (
    //! Использование отфильтрованных постов в компонентах, мы передаем отфилтрованные посты в компонент PostList с помощью свойтсва posts
    <>
      <Form addNewPost={addNewPost} searchPosts={searchPosts} />
      <PostList title="IT" posts={filteredPosts} removePost={removePost} />
    </>
  );
};
