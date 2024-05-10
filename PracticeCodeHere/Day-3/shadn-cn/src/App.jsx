import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./page/Blog";
// import BootmSec from "./page/BootmSec";
import HomePage from "./page/HomePage";
import { Tags } from "lucide-react";
import Category from "./pages/Category";

// theme changer
function App() {
  return (
    <>
      <div>
        {/* Routes concepts apply here */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/BlogContent" element={<Blog />}></Route>
          <Route path="/Tags" element={<Tags />}></Route>
          <Route path="/Category" element={<Category />}></Route>
        </Routes>
        {/* <BootmSec /> */}
      </div>
    </>
  );
}

export default App;
