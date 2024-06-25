import Body from "./components/Body";
import Head from "./components/Head";
const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Namaste Youtube! </h1>
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
  );
};

export default App;
