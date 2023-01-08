import store from "./stores";
import { addTodo, deleteTodo } from "./stores/todo";
import { login, logout } from "./stores/auth";
import { closeModal, openModal } from "./stores/modal";

export const addTodoHandle = (todo) => {
  store.dispatch(addTodo(todo));
  console.log(store.getState().todo.todos);
};

export const deleteTodoHandle = (id) => {
  store.dispatch(deleteTodo(id));
};

export const loginHandle = (user) => {
  store.dispatch(login(user));
};

export const logoutHandle = () => {
  store.dispatch(logout());
};

export const openModalHandle = (modal) => {
  store.dispatch(openModal(modal));
};

export const closeModalHandle = () => {
  store.dispatch(closeModal());
};
