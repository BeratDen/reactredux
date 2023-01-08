import { useState } from "react";
import { editTodo } from "../stores/todo";
import { useDispatch } from "react-redux";

export default function EditTodo({ data, close }) {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState(data.title);
  const [done, setDone] = useState(data.done);

  const submitHandle = (e) => {
    e.preventDefault();

    dispatch(
      editTodo({
        id: data.id,
        title: todo,
        done,
      })
    );
    close();
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <br />
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={(e) => setDone(e.target.checked)}
            checked={done}
          />
        </label>
        Tamamlandı !<button type="submit">Kaydet</button>
      </form>
      <button onClick={close}> Kapat </button>
    </div>
  );
}
