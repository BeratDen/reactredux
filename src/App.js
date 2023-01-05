
import { useEffect } from "react";
import { PostService, UserService } from "./services";

function App() {
  useEffect(() => {
    // Post Service
    PostService.getPosts().then((res) => console.log(res));
    PostService.getPostDetail(1).then((res) => console.log(res));
    PostService.newPost({
      userId: 3,
      title: "test",
      body: "test",
    }).then((res) => console.log(res));
    // Post Service

    // User Service

    UserService.getUser().then((res) => console.log(res));
    UserService.getuserDetail(3).then((res) => console.log(res));
    UserService.newUser({
      name: "berat",
      userName: "elite",
      email: "berat.denizsids@gmail.com",
    });

    // User Service
  }, []);

  return <></>;

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

}

export default App;
