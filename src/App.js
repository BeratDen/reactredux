import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./todo/Header";
import AddTodo from "./todo/AddTodos";
import TodoList from "./todo/TodoList";
import Modal from "./todo/Modal";
import utiles from "./ultiles";

function App() {
  const { active } = useSelector((state) => state.modal);

  const [lenguage, setLenguage] = useState("tr");
  const [dark, setDark] = useState(true);

  // TODO: dark ve lenguage yi modal todo gibi reduxla kontrol et

  return (
    <main>
      {active && <Modal></Modal>}
      <Header></Header>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </main>
  );
}

export default App;
