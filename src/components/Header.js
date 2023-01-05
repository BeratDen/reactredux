import SwitchTheme from "./SwitchTheme";
import SwitchLenguage from "./SwitchLenguage";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, dispatch } = useAuth();

  const login = () => {
    dispatch({
      type: "LOGIN",
      value: {
        id: 1,
        name: "Berat",
        surname: "Deniz",
      },
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      value: false,
    });
  };

  return (
    <header>
      HEADER
      {(user && <button onClick={logout}>Çıkış Yap</button>) || (
        <button onClick={login}>Giriş Yap</button>
      )}
      <hr />
      <br />
      <SwitchTheme />
      <SwitchLenguage />
    </header>
  );
}
