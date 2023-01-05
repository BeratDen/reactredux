import { forwardRef, useRef } from "react";

function Input(props, ref) {
  return <input ref={ref} type="text" name="" id="" {...props} />;
}

Input = forwardRef(Input);

export default function UseRef() {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      useRef() - forwardRef()
      <Input ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </div>
  );
}
