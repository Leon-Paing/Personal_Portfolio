import React from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

    const navigateGitHub = () => {
        window.open("https://github.com/Leon-Paing")
    }

    const navigateLinkedinProfile = () => {
        window.open("https://www.linkedin.com/in/yan-paing-phyoe-9a48aa321/")
    }


    return(

        <>  
            <div className="w-full flex xl:flex-row xs:flex-col justify-center items-center p-3 xl:gap-6 xs:gap-3 xl:mb-4 xs:mb-2">
                <span className="xl:w-auto xs:w-full flex justify-start items-center p-1 border-2 rounded-md mb-3 bg-white shadow-md shadow-gray-300">
                        <FiMail className="w-6 h-6 ms-2 me-3"></FiMail>
                        <span className="border-l-2 pl-1">yanpaingwork.profession@gmail.com</span>
                </span>

                <span className="xl:w-auto xs:w-full flex justify-start items-center border-2 p-1 rounded-md bg-white mb-3 shadow-sm shadow-gray-300"  onClick={navigateGitHub}>
                        <FaGithub className="w-6 h-6 ms-2 me-3"></FaGithub>
                        <span className="border-l-2 pl-1 cursor-pointer hover:text-slate-600">Leon-Paing</span>
                        <GoArrowUpRight className="w-4 h-4 ms-1"></GoArrowUpRight>
                </span>

                <span className="xl:w-auto xs:w-full flex justify-start items-center border-2 p-1 rounded-md bg-white mb-3"  onClick={navigateLinkedinProfile}>
                        <FaLinkedin className="w-6 h-6 ms-2 me-3 text-blue-700"></FaLinkedin>
                        <span className="border-l-2 pl-1 cursor-pointer hover:text-blue-700">Yan Paing (Leon) Phyoe</span>
                        <GoArrowUpRight className="w-4 h-4 ms-1"></GoArrowUpRight>
                </span>
            </div>
            <div className="w-full flex justify-center items-center p-4 text-base">
                Copyright &copy; Leon-Paing@2024. All rights reserved.
            </div>

            <div className="w-full flex justify-center items-center p-10 text-base">
                ......
            </div>
        </>
    )
}

export default Footer;