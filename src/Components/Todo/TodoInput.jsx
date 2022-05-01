import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addTodo, deleteTodo } from "../Redux/action";
import { v4 as uuidv4 } from "uuid";

export default function TodoInput() {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const { id } = useParams();

  const handleClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        title: text,
        desc: desc,
        status: false,
      })
    );
  };

  const handleDelete = (data) => {
    dispatch(deleteTodo(data));
  };

  const store = useSelector((store) => {
    return store;
  });

  return (
    <>
      <div>
        <h1>Todo Input</h1>
        <input
          type="text"
          placeholder="Enter Todo"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Todo Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button onClick={handleClick}>Add Todo</button>
      </div>

      <div>
        {store.map((e) => {
          return (
            <div className="todoList" key={e.id}>
              <Link to={`/todo/${e.id}`}>
                <h4>{e.title}</h4>
              </Link>
              <button
                onClick={() =>
                  handleDelete({
                    id: e.id,
                    title: e.title,
                    desc: e.desc,
                    status: e.status,
                  })
                }
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
