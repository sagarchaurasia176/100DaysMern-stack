import React, { useContext, useEffect } from "react";
import { MainContextCreator } from "../context/ContextProvider";

const Home = () => {
  const { userDtl, GetApi } = useContext(MainContextCreator);
  console.log(userDtl, "user name");
  //Now we have to passed the useEffect
  useEffect(() => {
    GetApi();
  }, []);

  return (
    <>
      <div>
        {userDtl.length === 0 ? (
          <b>Data not found here</b>
        ) : (
          userDtl.map((val, index) => (
            <div key={index}>
              <p>{val.name.first}</p>
              <img src={val.picture.thumbnail} alt="" />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
