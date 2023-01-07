import classNames from "classnames";

function Button({ variant = "default", children }) {
  return (
    <button
      className={classNames({
        "p-4 h-10 flex items-center mb-5  rounded": true,
        "bg-gray-300": variant === "default",
        "bg-green-300 text-white": variant === "success",
        "bg-red-300 text-white": variant === "danger",
        "bg-yellow-200 ": variant === "warning",
      })}
    >
      {children}
    </button>
  );
}
export default Button;
