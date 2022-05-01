import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo} from "../Redux/action";
import { useParams } from "react-router-dom";

export default function TodoDetails() {
  const { id } = useParams();
  const store = useSelector((store) => {
    const data = store.filter((item) => {
      console.log(item.id, id);
      return item.id === id;
    });
    return data;
  });

  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(updateTodo(data));
  };

 

  return (
    <div>
      <h1>Todo Details</h1>
      {store.map((e) => {
        return (
          <div key={e.id} className="todoDetails">
            <div>
              <h3 style={{ margin: 0 }}>{e.title}</h3>
              <button
                onClick={() =>
                  handleClick({
                    id: e.id,
                    title: e.title,
                    desc: e.desc,
                    status: !e.status,
                  })
                }
              >
                {e.status ? "Complete" : "Incomplete"}
              </button>
            </div>

            <p>{e.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
