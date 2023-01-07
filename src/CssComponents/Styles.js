import "../css/style.scss";
import { Title } from "../CssComponents/Components";
import Bootstrap from "../CssComponents/Bootstrap";
import "../css/tailwind.css";
import Tailwind from "../CssComponents/Tailwind";
import "../css/index.css";

function Styles() {
  return (
    <div>
      <Title> Test </Title>
      <Title theme="dark"> Test </Title>
      <h3>{process.env.NODE_ENV}</h3>
      <p>{process.env.REACT_APP_API_URL}</p>

      <Bootstrap></Bootstrap>

      <Tailwind></Tailwind>

      <p className="env">
        <span>scss</span>
      </p>
    </div>
  );
}
export default Styles;
