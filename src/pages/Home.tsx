import React, { FC, useState } from 'react';
interface TodoAdd {
  // interface 로 type 정의. 객체의 속성이나 함수의 파라미터를 정의할 때 사용
  id: number;
  name: string;
}

// FC : function component 함수형 컴포넌트 타입
const Home: FC = () => {
  // 입력받은 값들을 넣어놓는 배열
  const [todoAdd, setTodoAdd] = useState<TodoAdd[]>([]);
  // map함수를 활용하여 컴포넌트나 DOM을 반복적으로 렌더링 할 때, unique한 key가 필요.
  //  key는 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내기 위해 사용.
  //  예로 데이터를 생성, 수정, 삭제할 때 빠르게 원소의 변화를 감지할 수 있다.
  const [uniqueId, setUniqueId] = useState<number>(0);
  // 입력받은 값을 담기 위한 state
  const [inputText, setInputText] = useState<string>('');

  // void : 함수에 return이 없을 경우
  // 입력받은 text값을 저장.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  // 추가 버튼 클릭 시 'li'에 추가
  const handleClick = (): void => {
    setTodoAdd(
      // 입력받은 값 배열에 담기.
      //   state 안에서 배열을 변형할 때 배열에 직접 접근하지 않고
      //   concat, filter로 새로운 배열을 할당하여 새로운 상태로 설정해야 한다.
      todoAdd.concat({
        id: uniqueId,
        name: inputText,
      }),
    );
    // 현재 id값에 +1
    setUniqueId(uniqueId + 1);
    // 입력 받은 값 다시 초기화
    setInputText('');
  };

  // enter 키 누를 때 handleClick 호출
  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  // JSX.Element : JSX 자료형 명시
  // map을 통해서 렌더링한 list값을 todoItems에 담아 출력.
  // 고유한 id가 없을 경우 map의 callback함수의 인수인 index를 활용하여 key값을 넘겨줄 수 있다.
  //    BUT index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못함.(고유한 값이 없을 때만 사용)
  const todoItems: JSX.Element[] = todoAdd.map(todoAdd => (
    <li key={todoAdd.id}>{todoAdd.name}</li>
  ));

  return (
    <>
      <input
        type="text"
        placeholder="할 일 입력"
        arai-lable="할 일 입력하세요"
        value={inputText}
        onChange={handleChange}
        // event 발생 시 this 값 적용??
        onKeyPress={e => handlePress(e)}
      />
      <ul>{todoItems}</ul>
    </>
  );
};
export default Home;
