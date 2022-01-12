import { Outlet } from "remix";
import { useLoaderData, Link } from "remix";

// this func will work server side. useLoaderData hook can be used to get the data from the server
export const loader = () => {
  const data = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        body: "This is the body of post 1",
      },
      {
        id: 2,
        title: "Post 2",
        body: "This is the body of post 2",
      },
      {
        id: 3,
        title: "Post 3",
        body: "This is the body of post 3",
      },
    ],
  };

  return data;
};

function Posts() {
  const data = useLoaderData();
  const posts = data.posts;

  return (
    <div>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="./new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to="./"{post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Posts;
