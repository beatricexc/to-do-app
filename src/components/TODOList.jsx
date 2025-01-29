// src/components/TODOList.jsx
import { FiEdit, FiTrash2 } from "react-icons/fi";


function Item({ item, setTodos }) {
    const completeTodo = () => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === item.id
            ? { ...todo, is_completed: !todo.is_completed }
            : todo
        )
      );
    };
    return (
      <li id={item?.id} className="todo_item" onClick={completeTodo}>
        <button className="todo_items_left" onClick={completeTodo}>
          <svg fill ={item?.is_completed ? "#f53394" : "#0d0d0d"} viewBox="0 0 24 24">
            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
          </svg>
          <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>
            {item?.title}
        </p>
        </button>
        <div className="todo_items_right">
          <button>
            <span className="visually-hidden">Edit</span>
            <FiEdit />
          </button>
          <button>
            <span className="visually-hidden">Delete</span>
            <FiTrash2 />
          </button>
        </div>
      </li>
    );
  }

function TODOList({ todos, setTodos }) {
    return (
      <ol className="todo_list">
        {todos && todos.length > 0 ? (
          todos?.map((item, index) => 
          (<Item key={index} item={item} seTodos={setTodos}/>
          ))
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )}
      </ol>
    );
  }
  export default TODOList;


