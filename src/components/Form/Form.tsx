import React, { useState } from "react";
import { MyBtn } from "../UI/MyBtn/MyBtn";
import { MyInput } from "../UI/MyInput/MyInput";
import styles from './Form.module.scss'

interface IFormProps {
  addNewPost: (postObj: { title: string; body: string; id: number }) => void;
  searchPosts: (searchText: string) => void;
}

export const Form: React.FC<IFormProps> = ({
  addNewPost,
  searchPosts,
}: IFormProps) => {
  const [postText, setPostText] = useState({ title: "", body: "" });
  const [searchText, setSearchText] = useState("");

  const generateNewPost = (e: React.FormEvent) => {
    e.preventDefault();

    if (postText.title.length < 10 || postText.body.length < 10) {
      alert("Заполните поля!!!");
      return;
    }

    const newPost = {
      id: Date.now(),
      ...postText,
    };

    addNewPost(newPost);
    setPostText({ title: "", body: "" });
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    searchPosts(e.target.value);
  };

  return (
    //! Добавление фукнциональности поиска в компонент Form
    //! Мы передаем функцию searchPosts в компонент Form, чтобы она могла обновлять состояние текста поиска на основе введенного пользователем значения.
    <>
      <form className='m-[10px]  w-[100%] px-[10px] py-[20px] bg-[#ffffff] flex justify-between items-center border-2 rounded-lg border-[#ffffff]'>
        <MyInput
          className='px-[20px] py-[10px] outline-none rounded-lg font-semibold border-2 border-[#efefef] '
          placeholder="Заголовок"
          value={postText.title}
          onChange={(e) =>
            setPostText({ ...postText, title: e.target.value })
          }
        />
        <MyInput
          className='px-[20px] py-[10px] outline-none rounded-lg font-semibold border-2 border-[#efefef] '
          placeholder="Текст контента"
          value={postText.body}
          onChange={(e) => setPostText({ ...postText, body: e.target.value })}
        />
        <MyBtn  className='p-[10px] bg-[#04d900] flex justify-center items-center rounded-md bg-[#2dd61d] text-slate-50 font-medium' onClick={generateNewPost}>
          Создать пост
        </MyBtn>
      </form>
      <form className="w-[100%] rounded-[10px] flex justify-center items-center gap-4">
        <MyInput
          className='w-[100%] font-semibold px-[20px] py-[10px] bg-[#ffffff] border-2 rounded-lg border-[#007bff68] outline-none'
          placeholder="Поиск"
          value={searchText}
          onChange={handleSearchInputChange}
        />
      </form>
    </>
  );
};
