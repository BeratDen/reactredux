import { useEffect, useState } from "react";

export default function Test() {
  const [postId, setpostId] = useState(1);
  const [post, setPost] = useState(false);

  useEffect(() => {
    console.log("Component started to render");
    return () => {
      console.log("Component Destroyed");
      clearInterval();
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  /*
  useEffect(() => {
    console.log("Component rendered");
  }); */

  return (
    <div>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
      <hr />
      <button
        className="bg-blue-200 p-4 rounded hover:bg-blue-400"
        onClick={() => setpostId((postId) => postId + 1)}
      >
        Sonraki konu
      </button>
      <hr />
      Test Componenti
    </div>
  );
}
