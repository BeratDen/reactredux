export default function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LENGUAGE":
      const lenguage = state.lenguage === "tr" ? "en" : "tr";
      localStorage.setItem("lenguage", lenguage);
      return {
        ...state,
        lenguage,
      };
    case "TOGGLE_THEME":
      const theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", theme);
      return {
        ...state,
        theme,
      };
  }
}
