import React from "react";

function Todo({ todo, isActive, setState }) {
  const handleDeleteBttn = () => {
    //삭제했던 게 없어지고 기존의 state가 갱신되야한다.그래서 setState를 써야한다.
    //삭제하려는 id를 접근하여 삭제한다.
    setState((prev) => prev.filter((List) => List.id !== todo.id));
    //List가 가지고 있는 id가 todo가 가지고 있는 id랑 다르면 filter해라.일치하는id빼고 갱신.
  };
  const handleSwitchBttn = () => {
    //삭제와 마찬가지로 setState를 통해 기존값으로 변경하고,isdone이 true,false왓다갓다하게
    //이전값을 map을 통해서 prev에 있는 todo를 하나하나씩들어간다.컴포넌트 자체의 id와 비교해서 같으면
    //내가 완료 버튼을 눌렀을 때 가리킨 컴포넌트와 일치하면 객체를 바꿔준다.
    setState((prev) =>
      prev.map((switchtodo) => {
        //switchtodo가 가지고 있는게 저 투두리스트 통틀어 하난데 만약 첫번째 완료버튼을 누르면
        //switchtodo.id가 첫번째 id를 가리키고 있는건데 구조분해 할당을 통해 안에 바뀔값만 다시 설정해주면 된다.
        //isDone만 원래 가지고 있는 값이랑 반대로 넣어준다.그럼 새로운 값으로 리턴이 된다.아니면 원래 값으로 리턴한다.
        //!가 부정의 뜻이니까 원래 것과 반대로 한다..라는 뜻같다.

        if (switchtodo.id === todo.id) {
          return { ...switchtodo, isDone: !switchtodo.isDone };
        } else {
          return switchtodo;
        }
      })
    );
  };

  return (
    //여기의 todo는 state의 투두 1개만 해당된다.
    <div style={{ border: "2px solid blue" }} key={todo.id}>
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
      <button onClick={handleSwitchBttn}>{isActive ? "완료" : "취소"}</button>
      <button onClick={handleDeleteBttn}>삭제</button>
    </div>
  );
}

export default Todo;
