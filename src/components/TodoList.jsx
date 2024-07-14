import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos} = props
  

  // return (
  //   <ul className='main'>
  //     {todos.map((todo,todoIndex) => {
  //         return(
  //           <TodoCard  
            
  //           {...props}  key={todoIndex}
  //           index={todoIndex} >
  //             <p>{todo}</p>
  //           </TodoCard>
  //         )
  //     })}
  //   </ul>
  // )
  return (
    <ul className='main'>
      {todos.length === 0 ? (
        <h1>You have completed your Todos :)</h1>
      ) : (
        todos.map((todo, todoIndex) => (
          <TodoCard 
            {...props} 
            key={todoIndex} 
            index={todoIndex}
          >
            <p>{todo}</p>
          </TodoCard>
        ))
      )}
    </ul>
  );
}
