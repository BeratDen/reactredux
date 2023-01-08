import { useSelector } from "react-redux";
import { deleteTodoHandle, openModalHandle } from "../ultiles";

export default function TodoItem({ todo }) {
  const { user } = useSelector((state) => state.auth);

  const deleteHandle = (e) => {
    deleteTodoHandle(todo.id);
  };

  const editHandle = () => {
    openModalHandle({
      name: "edit-todo", //modal element name
      data: todo, // modal data
    });
  };
  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title} - {todo.user}
      </span>
      {todo.user === user.id && (
        <>
          <button onClick={editHandle}>Düzenle</button>
          <button onClick={deleteHandle}>Sil</button>
        </>
      )}
    </li>
  );
}
