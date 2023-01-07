import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const loginHandle = () => {
    setUser({
      id: 1,
      userName: "elite",
    });
    navigate(location?.state?.return_url || "/", {
      replace: true,
      state: {
        name: "Berat",
      },
    });
  };

  return (
    <div>
      Login Page
      <br />
      <button onClick={loginHandle}>Giriş yap</button>
    </div>
  );
}
