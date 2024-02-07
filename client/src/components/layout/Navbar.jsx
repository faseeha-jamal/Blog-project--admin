import React from 'react'
import SearchField from '../common/SearchField'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[rgb(206,208,208)] flex justify-between p-2 text-black">
    <div>
    <FaGithub />
    </div>
    <div className='w-[60%] md:w-[40%]'>
    <SearchField type="text" placeHolder="Type Key Word To Search..."/>
    </div>
      </nav>
  )
}

export default Navbar