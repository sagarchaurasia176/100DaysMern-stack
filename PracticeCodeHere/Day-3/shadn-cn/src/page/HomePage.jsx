import React from 'react'
import ThemeNav from './ThemeNav'

const HomePage = () => {
  return (
    <div className='w-full max-h-screen sm:h-screen'>
          <ThemeNav/>
        {/* image concepts */}
       <div className=' w-1/2 '>
            <img
            className=' w-2/3'
            src=" https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?cs=srgb&dl=pexels-bertellifotografia-573238.jpg&fm=jpg" alt="" />
      </div>  

    </div>



  )
}

export default HomePage