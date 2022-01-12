import { useParams } from "remix";

function Post() {
  const params = useParams();

  return (
    <div>
      {/* this is basically the $filename */}
      <h1>Post #{params.postId}</h1>
    </div>
  );
}

export default Post;
