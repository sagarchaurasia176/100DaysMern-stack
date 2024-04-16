import { Button } from "@/components/ui/button";
import React from "react";

function footer() {
  return (
    <div>
      <div className=" w-full p-2 bg-white text-black">
        <Button>Next-Page </Button>
        <Button>Previous-Page </Button>
      </div>
    </div>
  );
}

export default footer;
