import { useContext, useEffect } from "react";
import "./App.css";
// import Header from "./page/Header";
// import { Route, Routes } from "react-router-dom";
import Blog from "./page/Blog";
import { AllstatesData } from "./Context/AppContext";
// import Navbar from "./page/Navbar";

function App() {
  const { ApiCalling} = useContext(AllstatesData)
  useEffect(()=>{
      ApiCalling();
},[])
  return (
    <>
      <div>
        <Blog />   
      </div>
    </>
  );
}

export default App;
