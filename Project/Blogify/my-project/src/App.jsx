import { useContext} from "react";
import "./App.css";
import { ContextProvider } from "./Context/ContextProvider";
// import Home from "./Page/Home";


function App() {
  // const BlogData = useContext(AllStatesContex)
  // useEffect(()=>{
  //   BlogData();
  // },[])
  // return the data here
  const Data = useContext(ContextProvider) 
  console.log(Data)
  return(
    <>
      {/* <Home/> */}
      <p>{Data}</p>
    </>
  )
}

export default App;
