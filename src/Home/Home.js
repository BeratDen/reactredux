import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      <Header></Header>
      <div className="AppName">
        App
        {(user && <div>{user.name + " " + user.surname}</div>) || (
          <div>Lütfen Giriş Yapın</div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
