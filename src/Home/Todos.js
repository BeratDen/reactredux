import TodoItem from "./TodoItem";

export default function Todos({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index}></TodoItem>
        ))}
      </ul>
    </div>
  );
}
