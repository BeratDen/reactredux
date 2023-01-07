import PrivateRoute from "./components/PrivateRoutes";
import { Profile } from "./pages/profile";
import { Contact, HomeLayout, Page404, Home } from "./pages";
import { Blog, Blog404, BlogLayout, Categories, Post } from "./pages/blog";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";

const routes = [
  {
    path: "/",
    name: "home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        name: "index",
        element: <Home />,
      },
      {
        name: "contact",
        path: "contact",
        element: <Contact />,
      },
      {
        name: "blog",
        path: "adana", // path in değiştirilmesi linkin bozulmasına sebep olmaz path istendiği zaman değiştilebilir
        element: <BlogLayout />,
        auth: true,
        children: [
          {
            name: "index",
            index: true,
            element: <Blog />,
          },
          {
            name: "categories",
            path: "categories",
            element: <Categories />,
          },
          {
            name: "post",
            path: "post/:id/:url",
            element: <Post />,
          },
          {
            name: "notFound",
            path: "*",
            element: <Blog404 />,
          },
        ],
      },
      {
        name: "profile",
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
        auth: true,
      },
    ],
  },
  {
    name: "auth",
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        name: "login",
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    name: "notFound",
    path: "*",
    element: <Page404></Page404>,
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    // admin denetimi istendiğinde admin denetimi için component oluştur ve aynı şekilde diğer şeyleride değiştirebilirsin
    // if (route?.admin) {
    //     route.element = <AdminRoute>{route.element}</AdminRoute>;
    //   }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

authMap(routes);

export default authMap(routes);
