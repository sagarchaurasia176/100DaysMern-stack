import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./page/Blog";
// import BootmSec from "./page/BootmSec";
import HomePage from "./page/HomePage";
function App() {
  // theme changer
  return (
    <>
      <div> 
        {/* Routes concepts apply here */}
        <Routes>
      <Route path="/" element = {<HomePage/>}></Route>
      <Route path="/BlogContent" element ={<Blog/>}></Route>  
      </Routes>
        {/* <BootmSec /> */}
      </div>
    </>
  );
}

export default App;
