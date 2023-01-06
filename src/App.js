import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Blog404 from "./pages/blog/Blog404";
import Page404 from "./pages/Page404";
import style from "./style.css";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive && "aktif"}>
          Anasayfa
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "red" : "white",
          })}
        >
          İletişim
        </NavLink>
        <NavLink to="/blog">
          {({ isActive }) => (
            <>
              Blog
              {isActive && "(AKTİF)"}
            </>
          )}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<BlogLayout />}>
          <Route index={true} element={<Blog></Blog>}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route path="post/:id/:url" element={<Post />}></Route>
          <Route path="*" element={<Blog404 />}></Route>
          {/* <Route path="post/:url-:id" element={<Post />}></Route> */}
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
