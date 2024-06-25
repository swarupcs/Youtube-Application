import Body from "./components/Body";
import Navbar from "./components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";
import Feed from "./components/Feed";
import { YOUTUBE_VIDEO_API } from "./constant/youtube";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {

        path: "/watch",
        element: <Watch />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Navbar />
      {console.log(YOUTUBE_VIDEO_API)}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
