import { Outlet, LiveReload, Link } from "remix";
import globalStylesUrl from "./styles/global.css";

export default function App() {
  return (
    <RootDoc>
      <Layout>
        <Outlet />
      </Layout>
    </RootDoc>
  );
}

function RootDoc({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={globalStylesUrl} />
        <title>{title ? title : "App"}</title>
      </head>
      <body>
        {/* brings out all the routes stuff */}
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>

        <ul className="">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}
