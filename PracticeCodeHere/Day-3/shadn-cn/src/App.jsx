import "./App.css";
import Header from "./page/Header";
import { Route, Routes } from "react-router-dom";
import Blog from "./page/Blog";
import Navbar from "./page/Navbar";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContex";

function App() {
  const blogData = useContext(AppContext);
  useEffect(() => {
    blogData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Blog />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
