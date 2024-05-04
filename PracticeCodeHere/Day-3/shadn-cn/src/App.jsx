import { useContext } from "react";
import "./App.css";
import Blog from "./page/Blog";
import AllstatesProvider from "./Context/AppContext";

function App() {
    // theme changer 

  return (
    <>
        <div>
        <Blog />
      </div>
    </>
  );
}

export default App;
