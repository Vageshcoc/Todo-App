import React, { useState } from 'react'

export default function Todoinput(props) {
  const {handleAddTodos, todoValue, setTodoValue } = props;
  
  // return (
  //   <header>
  //     <input  value={todoValue} onChange={(e) => {
  //       setTodoValue(e.target.value)
  //     }} placeholder='Enter todo...'/>
  //     <button onClick={() => {
  //       handleAddTodos(todoValue)
  //       setTodoValue('')
  //     }} >Add</button>
  //   </header>
  // )
  const [errorMessage, setErrorMessage] = useState('');
  
  // by using a state variable to hold the error message and displaying it conditionally in the component

  const handleAddClick = () => {
    if (todoValue.trim() !== '') {
      handleAddTodos(todoValue);
      setTodoValue('');
      // setErrorMessage(''); // Clear the error message if the todo is valid
    } else {
      setErrorMessage(alert('Please ensure that the todo is not empty.'));
    }
  };

  return (
    <header>
      <input 
        value={todoValue} 
        onChange={(e) => {
          setTodoValue(e.target.value);
          // setErrorMessage(''); // Clear the error message when the user starts typing
        }} 
        placeholder='Enter todo...' 
      />
      <button onClick={handleAddClick}>
        Add
      </button>
      {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
    </header>
  );
}