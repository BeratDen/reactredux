import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../Reducers";

/// Remember change use state to useReducer and do other stuffs in Reducer components

const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : false,
  });

  const data = {
    ...state,
    dispatch,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);

export default Provider;
