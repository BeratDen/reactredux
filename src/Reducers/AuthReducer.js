export default function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.value));
      return {
        ...state,
        user: action.value,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        ...state,
        user: false,
      };
  }
}
