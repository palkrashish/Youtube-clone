import React from "react";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className="text-3xl font-bold underline"> </h1>
        <Head />
        <RouterProvider router={appRouter} />
        {/* Head
          Body
            Sidebar
              MenuItems
          MainContainer
            ButtonList
            VideoContainer
            VideoCard    
      
      */}
      </div>
    </Provider>
  );
};

export default App;
