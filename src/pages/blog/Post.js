import { useParams } from "react-router-dom";

export default function Post() {
  const { id, url } = useParams();
  console.log(url);

  return (
    <div>
      Blog Post page = {id} {url}
    </div>
  );
}
