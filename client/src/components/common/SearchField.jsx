import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


function SearchField({ type,placeHolder }) {
  return (
    <div className="flex border-[1px] border-gray-700 w-full justify-between text-black">
    <input
      type={type}
      placeholder={placeHolder}
      className="text-sm bg-transparent border-none px-5 w-full outline-none"   
    />
    <IoSearchSharp /> 
  </div>
  )
}

export default SearchField