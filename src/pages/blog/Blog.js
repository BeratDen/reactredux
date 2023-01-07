import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { url } from "../../utils";
import { Helmet } from "react-helmet";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [name, setName] = useState(searchParams.get("name") || "");

  useEffect(() => {
    searchParams.set("search", search);
    searchParams.set("name", name);

    // if sorgusunuda döngüye alabilirsen burası tamamdır
    if (!search) {
      searchParams.delete("search");
    }
    if (!name) {
      searchParams.delete("name");
    }

    setSearchParams(Object.fromEntries([...searchParams]));
  }, [search, name]);

  const posts = [
    {
      id: 1,
      title: "Post - 1",
      url: "post-1",
    },
    {
      id: 2,
      title: "Post - 2",
      url: "post-2",
    },
    {
      id: 3,
      title: "Post - 3",
      url: "post-3",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="blog description" />
      </Helmet>
      <h3>Blog Sayfası</h3>

      <input
        type="text"
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
      />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={url("home.blog.post", {
                id: post.id,
                url: post.url,
              })}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
