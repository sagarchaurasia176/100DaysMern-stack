import React from 'react'
import { HashLoader } from 'react-spinners'
function Spinner() {
    return (
        <div>
            <HashLoader   className=' justify-center flex m-auto '  color="#36d7b7"/>
            {/* <ClipLoader className=' justify-center  h-screen bg-black flex m-auto' color="#36d7b7" /> */}
        </div>
    )
}

export default Spinner