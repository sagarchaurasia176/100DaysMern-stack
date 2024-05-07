import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
// import Spinner from "./Spinner";
import { AllstatesData } from "@/Context/AppContext";
const BootmSec = () => {
  //page handler contextAPI
  const { PageHandler, page, totalPages } = useContext(AllstatesData);
  return (
    <div>
      <div className=" bg-slate-800 flex justify-around w-full p-2">
        {/* for preivious page here */}

        {page > 1 && (
          <>
            <button
              className=" bg-slate-900 text-white p-1 w-[100px]"
              onClick={() => PageHandler(page - 1)}
            >
              Prev Page{" "}
            </button>
          </>
        )}

        {page < totalPages && (
          <>
            <button
              className=" bg-slate-900 text-white p-1 w-[100px]"
              onClick={() => PageHandler(page + 1)}>
              Next Page
            </button>
          </>

        )}  {/* Button conecpts apply here */}
           <Button>
          Page {page} of {totalPages}
        </Button>
      </div>
    </div>
  );
};
export default BootmSec;