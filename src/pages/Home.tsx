import React, { FC, useState } from 'react';

const Home: FC = () => {
  const [value, setValue] = useState('');
  const [text, setText] = useState('');

  const handleTextArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value === '') {
        return alert('내용 입력하라고');
      } else {
        setText(value);
      }
    }
  };
  const ListItem: FC = () => {
    return <li>{text}</li>;
  };

  return (
    <form>
      <input
        type="text"
        id="inputText"
        placeholder="할 일 입력해"
        arai-lable="할 일 입력하세요"
        value={value}
        onChange={handleTextArea}
        onKeyPress={handleKeyPress}
      />
      <ul>
        <ListItem />
      </ul>
    </form>
  );
};
export default Home;
