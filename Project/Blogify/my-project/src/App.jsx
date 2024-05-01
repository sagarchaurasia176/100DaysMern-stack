import { useContext} from "react";
import "./App.css";
import { ContextProvider } from "./Context/ContextProvider";
import Blog from "./Components/Blog";
// import Home from "./Page/Home";


function App() {
  // const BlogData = useContext(AllStatesContex)
  // useEffect(()=>{
  //   BlogData();
  // },[])
  // return the data here
  return(
    <>
      {/* <Home/> */}
      <Blog/>
    </>
  )
}

export default App;
