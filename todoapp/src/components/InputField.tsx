import React, { useRef } from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) => {handleAdd(e)
      inputRef.current?.blur()
    }}>
      <input
        type="text"
         ref={inputRef}
        placeholder="Enter task"
        value={todo}
        className="input__box"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
