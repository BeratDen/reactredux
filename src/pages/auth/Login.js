import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Giriş Yap</title>
        <meta name="description" content="login description" />
      </Helmet>
      Login Page
      <br />
      <button onClick={loginHandle}>Giriş yap</button>
    </div>
  );
}
