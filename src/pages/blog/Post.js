import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Post() {
  const { id, url } = useParams();

  return (
    <div>
      <Helmet>
        <title>Blog-{url}-detay</title>
        <meta name="description" content="blog-detail description" />
      </Helmet>
      Blog Post page = {id} {url}
    </div>
  );
}
