import { useField, ErrorMessage } from "formik";
import classNames from "classnames";

export default function TextArea({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <label className="block w-full">
      <div className="text-sm text-gray-600 block mb-1.5">{label}</div>
      <textarea
        className={classNames({
          "w-full rounded resize-none border-b outline-none": true,
          "focus:border-black": meta.error || !meta.touched,
          "border-red-600": meta.error && meta.touched,
        })}
        {...field}
        {...props}
      ></textarea>
      <ErrorMessage
        name={field.name}
        component="small"
        className="text-xs block mt-2 text-red-600"
      ></ErrorMessage>
    </label>
  );
}
