<<<<<<< HEAD
import { useRoutes, generatePath } from "react-router-dom";
import routes from "./Routes";
import style from "./style.css";
import { url } from "./utils";

function App() {
  // console.log(generatePath("blog/post/:id/:url", { id: 2, url: "test-url" }));
  console.log(url("home.blog.categories"));
  return useRoutes(routes);
=======
import { AuthProvider, SiteProvider } from "./context";

import Home from "./Home/Home";

function App() {
  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </SiteProvider>
    
  );
>>>>>>> 11
}

export default App;
