import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
const App = () => {
  return (
    <Provider store={store} >
    <div>
      <h1 className="text-3xl font-bold underline"> </h1>
      <Head />
      <Body />
     
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
