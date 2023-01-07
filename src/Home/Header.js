import { memo } from "react";

function Header() {
  console.log("Header rendered");

  return <div>Header</div>;
}

export default memo(Header);
