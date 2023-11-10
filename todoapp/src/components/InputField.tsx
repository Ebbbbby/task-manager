import React from 'react'
import './styles.css'

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo,handleAdd}:props) => {
  return (
    <form className='input' onSubmit={handleAdd}>
      <input type="text" name="" id="" placeholder='Enter task' value={todo} className='input__box' onChange={(e)=> setTodo(e.target.value)} />
      <button className='input__submit' type='submit' >Go</button>
    </form>
  )
}

export default InputField