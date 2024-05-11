import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Blog from "./page/Blog";
// import BootmSec from "./page/BootmSec";
import HomePage from "./page/HomePage";
import Category from "./pages/Category";
import BlogContex from "./pages/BlogContex";
import TagsCategory from "./pages/TagsCategory";

// theme changer
function App() {
  return (
    <>
      <div>
        {/* Routes concepts apply here */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Tags/:tag" element={<TagsCategory />}></Route>
          <Route path="/BlogContex/:blogId" element={<BlogContex />}></Route>
          <Route path="/Category/:categoryId" element={<Category />}></Route>
        </Routes>
        {/* <BootmSec /> */}
      </div>
    </>
  );
}

export default App;
