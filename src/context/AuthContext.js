<<<<<<< HEAD
import { createContext, useState, useContext, useEffect } from "react";

const Context = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );
  const data = {
    user,
    setUser,
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

=======
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
>>>>>>> 11
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);
<<<<<<< HEAD
=======

export default Provider;
>>>>>>> 11
