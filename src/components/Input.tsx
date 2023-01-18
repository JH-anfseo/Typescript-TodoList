import React, { FC, ChangeEvent, useState } from "react";
import { ITodo } from "./Type";
import { v4 as uuidv4 } from "uuid";

const Input: FC = ({ setTodoList }) => {
  //'{}' 형식에 'setTodoList' 속성이 없습니다..오류..
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (!title) {
      return alert("제목을 입력해주세요");
    }
    if (!content) {
      return alert("내용을 입력해주세요");
    }

    const NewstateList: ITodo = {
      title: title,
      content: content,
      isDone: false,
      id: uuidv4(),
    };
    setTodoList((prev: ITodo[]): ITodo[] => [...prev, NewstateList]);
    setTitle("");
    setContent("");
  };
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {/* 컴포넌트를 나눠서 상위  ->하위 컴포넌트로 props를 보내고 관리할 수 있도록 
    (prop를 보내는 대상이 state니까 그 하위 컴포넌트를 통해 set 등의 기능을 가진 컴포넌트를 만들것이다.)
    추가 버튼을 누르면 리스트로 들어가게 한다. */}
        제목 : <input value={title} onChange={handleTitleChange} />
        내용 : <input value={content} onChange={handleContentChange} />
        {/* input의 내용과 title,content는 같이 가야한다. 내용이 입력될 때마다 state가 갱신되야하니까 */}
        <button>추가</button>
      </form>
    </section>
  );
};

export default Input;
