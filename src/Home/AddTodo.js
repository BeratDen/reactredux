export default function AddTodo({ inputChange, submitHandle, todo }) {
  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={todo} onChange={inputChange} />
      <button type="submit">Ekle</button>
    </form>
  );
}
