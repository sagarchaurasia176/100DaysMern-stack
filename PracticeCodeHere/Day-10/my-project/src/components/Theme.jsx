import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";


function Theme() {
  return (
<>
    <nav class="bg-gray-800 shadow">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex-shrink-0">
        <a href="/" class="text-white font-bold text-lg">Logo</a>
      </div>
      <div class="hidden md:block">
        <div class="ml-4 flex items-center md:ml-6">
          <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="/services" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          <a href="/contact" class=" p-2  text-white bg-gray-400 rounded-md cursor-pointer">
            <MdOutlineDarkMode/>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

    


  </>

  )
}

export default Theme