import { useSite } from "../context";

export default function SwitchLenguage() {
  const { lenguage, dispatch } = useSite();

  const switchLenguage = () => {
    dispatch({
      type: "TOGGLE_LENGUAGE",
    });
  };

  return (
    <div>
      Mevcut Dil = {lenguage} <br />
      <button onClick={switchLenguage}>Dili Değiştir</button>
    </div>
  );
}
