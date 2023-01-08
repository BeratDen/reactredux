import { useField, ErrorMessage } from "formik";
import { FiCheck } from "react-icons/fi";
import classNames from "classnames";

export default function CheckBox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  const spanError = () => {
    console.log("Hata");
  };

  return (
    <>
      <label className="flex ga-x-2 text-sm cursor-pointer items-center">
        <button
          type="button"
          onClick={() => {
            helpers.setValue(!field.value);
            if (field.value) {
              //TODO raise Error
            }
          }}
          className={classNames({
            "w-5 h-5 rounded border transition-all flex items-center justify-center": true,
            "border-gray-300 text-transparent": !field.value,
            "border-red-600": meta.error && (meta.touched || !field.value),
            "border-blue-600 bg-blue-600 text-white":
              field.value && !meta.error,
          })}
        >
          <FiCheck size={15}></FiCheck>
        </button>
        {label}
      </label>
      <ErrorMessage
        name={field.name}
        component="small"
        className="text-xs block mt-1 text-red-600"
      ></ErrorMessage>
    </>
  );
}
