import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { VideoDetail, ChannelDetail, Feed, SearchFeed } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Feed />
      },
      {
        path: "/video/:id",
        element: <VideoDetail />
      },
      {
        path: "/channel/:id",
        element: <ChannelDetail />
      },
      {
        path: "/search/:searchTerm",
        element: <SearchFeed />
      },
    ]
  }
]);

export default router;