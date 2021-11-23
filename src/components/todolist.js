import React from 'react';

const TodoList = ({ todos }) => {
    return ( 
        <ul className="list-group container">
        {/* <h1 className="text-center mt-0 mb-3">TodoList</h1> */}
            {todos.map((todo) => (
                // <h3 className="ml-3">{todo.department}</h3>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-secondary text-light">
                    {todo.id}  {todo.title}
                    <input type='checkbox' />
                </li>
            ))}
        </ul>
        
    );
}
 
export default TodoList;