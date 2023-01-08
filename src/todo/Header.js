import { useSelector } from "react-redux";
import { loginHandle, logoutHandle } from "../ultiles";

export default function Header() {
  const { user } = useSelector((state) => state.auth);

  const loginHandler = (user) => {
    loginHandle(user);
  };

  const logoutHandler = () => {
    logoutHandle();
  };

  return (
    <header className="header">
      <h2>Logo</h2>
      {!user && (
        <nav>
          <button onClick={() => loginHandler({ id: 1, username: "berat" })}>
            Berat olarak giriş yap
          </button>
          <button onClick={() => loginHandler({ id: 2, username: "sea" })}>
            sea olarak giriş yap
          </button>
        </nav>
      )}
      {user && (
        <nav>
          Hoşgeldiniz... {user.username}
          <button onClick={logoutHandler}>Çıkış Yap</button>
        </nav>
      )}
    </header>
  );
}
