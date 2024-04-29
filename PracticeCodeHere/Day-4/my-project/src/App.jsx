import { useContext } from "react";
import "./App.css";
import User from "./page/User";
import { ContextCreate } from "./context/AllStates";

function App() {
  const heading = useContext(ContextCreate);
  console.log(heading);
  return (
    <>
      <h1 className=" text-white">{heading}</h1>
      <User />
    </>
  );
}

export default App;
