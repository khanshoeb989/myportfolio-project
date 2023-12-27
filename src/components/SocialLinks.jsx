import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    




  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>

        
        <li className=" flex justify-between items-center w-40 h-14 px-4 bg-blue-500 ml-[-100px] hover:ml-[-10px] hover:rounded-2xl duration-300 rounded-tr-md">
          <a href="https://www.linkedin.com/in/khan-shoeb-a7b127221/" 
          className="flex justify-between items-center w-full text-white">
            <>
              LinkedIn <FaLinkedin size={30}/>
            </>
          </a>
        </li>
        <li className=" flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-2xl duration-300 ">
          <a href="https://github.com/khanshoeb989" 
          className="flex justify-between items-center w-full text-white">
            <>
              GitHub <FaGithub size={30}/>
            </>
          </a>
        </li>
        <li className=" flex justify-between items-center w-40 h-14 px-4 bg-red-500 ml-[-100px] hover:ml-[-10px] hover:rounded-2xl duration-300 ">
          <a href="mailto:khanshoeb66489@gmail.com" 
          className="flex justify-between items-center w-full text-white">
            <>
              Mail <HiOutlineMail size={30}/>
            </>
          </a>
        </li>
        <li className=" flex justify-between items-center w-40 h-14 px-4 bg-yellow-400 ml-[-100px] hover:ml-[-10px] hover:rounded-2xl duration-300 rounded-br-md">
          <a href="ff" 
          className="flex justify-between items-center w-full text-white">
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
