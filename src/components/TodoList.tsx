import React from "react";
import Todo from "./Todo";

function TodoList({ todoList, setTodoList, isActive }) {
  //props로 state를 받아온다. 이후 맵함수를 통해 전체를 돌린다.
  return (
    //js문법이니 중괄호. app.jsx에서 todoList를 2개 출력인데 완료와 되지않은 것으로 나눠야하는데
    //여기서 props 하나만 전달하면 될 것같다.
    <div>
      {/* 해야할 것과 완료된 것을 나눠야 하기 때문에 isActive를 통해 제어한다 
      isActive를 통해 투두에 있는 배열도 제어가 가능하다.*/}
      <h4>{isActive === true ? "해야할 것" : "완료된 것"}</h4>
      {state
        //filter를 통해 해야할 것과 완료된 것을 구분해서 나눈다.여기의 todo는 state하나하나를 말한다.
        .filter((todo) => todo.isDone === !isActive) //todo의 isDone이 isActive가 아니것만 나오게 한다.
        .map((todo) => {
          // 투두가 가지고 있는 타이틀.
          return (
            <Todo todo={todo} isActive={isActive} setTodoList={setTodoList} />
          );
        })}
    </div> //빈태그가 아닌 div로 설정해야 안의 내용을 css 제어 가능하다.>
  );
}

export default TodoList;
