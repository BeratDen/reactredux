import { useSelector } from "react-redux";
import modals from "../modals";
import { closeModalHandle } from "../ultiles";

export default function Modal() {
  const { name, data } = useSelector((state) => state.modal);

  const modal = modals.find((m) => m.name === name);

  const close = () => {
    closeModalHandle();
  };

  return (
    <div className="modal">
      <div className="inner-modal">
        <modal.element data={data} close={close}></modal.element>
      </div>
    </div>
  );
}
