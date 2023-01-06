import { Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div>
      <h3>Blog Layout</h3>

      <Outlet></Outlet>
    </div>
  );
}
