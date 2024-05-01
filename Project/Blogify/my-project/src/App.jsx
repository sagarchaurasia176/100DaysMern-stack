import { useContext, useEffect } from "react";
import "./App.css";
import Home from "./Page/Home";
import AllStatesContex from "./Context/AllStatesContex";

function App() {
  const BlogData = useContext(AllStatesContex)
  useEffect(()=>{
    BlogData();
  },[])
  // return the data here
    return(
    <>
      <Home/>
    </>
  )
}

export default App;
