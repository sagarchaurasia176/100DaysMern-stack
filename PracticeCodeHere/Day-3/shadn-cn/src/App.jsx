import "./App.css";
// import Header from "./page/Header";
// import { Route, Routes } from "react-router-dom";
import Blog from "./page/Blog";
import Navbar from "./page/Navbar";
// import { useContext} from "react";
// import { AllstatesData } from "./Context/AppContex";

function App() {
 

  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Blog/>
        {/* <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
