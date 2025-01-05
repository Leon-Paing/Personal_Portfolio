import React, { useState } from "react";
import { IoIosReturnRight } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { GiSplitCross } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import LazyLoad from "react-lazyload";

const Home = () => {

    const [contactBoxVisible, setContactBoxVisible] = useState(false);

    const toggleContactBox = () => {
        setContactBoxVisible(!contactBoxVisible);
    }

    const navigateLinkedinProfile = () => {
        window.open("https://www.linkedin.com/in/yan-paing-phyoe-9a48aa321/")
    }

    const navigateGitHub = () => {
        window.open("https://github.com/Leon-Paing")
    }

    return(
        <>
            <div className="w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-center items-center xl:mt-28 xs:mt-20">
                <div className="xl:w-1/2 xs:w-full flex flex-col justify-start items-center text-left mb-20">
                    <span className="w-full text-2xl p-2">Hi 👋</span>
                    <span className="w-full flex flex-col justify-center items-start text-2xl p-1 mt-4"><span className="p-1">I'm </span>
                        <span className="text-6xl flex justify-start items-start ">LEON,</span>
                    </span>
                    <span className="w-full flex justify-start items-center text-7xl mt-10">WEB DEVELOPER</span>
                    <span className="w-full flex justify-center items-center text-2xl mt-7">&&</span>
                    <span className="w-full flex justify-end items-center text-7xl mt-7">TECH NERD</span>
                    <div className="w-full h-auto flex justify-end items-center mt-8 p-3 text-2xl hover:text-gray-700 cursor-pointer" onClick={toggleContactBox}>
                        <span>Get in touch</span>
                        <IoIosReturnRight className="ms-1"></IoIosReturnRight>
                    </div>
                </div>

                <div className="xl:w-1/2 xs:w-full h-full flex flex-col justify-start items-center text-2xl gap-3 -mt-8">
                    <LazyLoad className="w-5/6 flex justify-center items-center p-1 bg-white rounded-md border-4 border-slate-100 shadow-xl z-30" once>
                        <img src="/Endura.jpeg" className="w-full rounded"></img>
                    </LazyLoad>

                    <div className="w-5/6 flex xl:flex-row xs:flex-col justify-between gap-3">
                        <LazyLoad className="xl:w-1/2 xs:w-full flex justify-center items-center p-1 bg-white rounded-md border-4 border-slate-100 shadow-xl z-20 hover:z-40" once>
                            <img src="/RunThrough.jpeg" className="w-full rounded"></img>
                        </LazyLoad>

                        <LazyLoad className="xl:w-1/2 xs:w-full flex justify-center items-center p-1 bg-white rounded-md border-4 border-slate-100 shadow-xl z-20 hover:z-40">
                            <img src="/gonews.jpeg" className="w-full rounded"></img>
                        </LazyLoad>
                    </div>
                </div>
            </div>

            <AnimatePresence>
            {contactBoxVisible && 
            (<motion.div className="w-full h-screen bg-black bg-opacity-50 fixed left-0 top-0 flex justify-center items-center z-50 overflow-hidden"
            exit={{opacity:0}}
            transition={{duration:0.7}}
            >
                <motion.div className="flex flex-col bg-white shadow-md shadow-gray-300 rounded-md p-4 xl:text-xl xs:text-lg z-50"
                initial={{opacity:0, scale: 0.2}}
                animate={{opacity:1, scale:1}}
                transition={{duration: 0.5, ease: "linear"}}
                exit={{opacity:0, scale:0.1}}
                >

                    <div className="w-full flex justify-between items-center border-b-2 mb-5 pb-1 ">
                        <span className="text-base">Reach me via:</span> 
                        <GiSplitCross className="text-2xl text-gray-500 cursor-pointer hover:text-gray-400" onClick={toggleContactBox}></GiSplitCross>
                    </div>

                    <span className="flex justify-start items-center p-1 border-2 rounded-md mb-3 bg-white shadow-md shadow-gray-300">
                        <FiMail className="w-6 h-6 ms-2 me-3"></FiMail>
                        <a href="mailto:yanpaingwork.profession@gmail.com" className="border-l-2 pl-1">yanpaingwork.profession@gmail.com</a>
                    </span>

                    <span className="flex justify-start items-center border-2 p-1 rounded-md bg-white mb-3 shadow-sm shadow-gray-300"  onClick={navigateGitHub}>
                        <FaGithub className="w-6 h-6 ms-2 me-3"></FaGithub>
                        <span className="border-l-2 pl-1 cursor-pointer hover:text-slate-600">Leon-Paing</span>
                        <GoArrowUpRight className="w-4 h-4 ms-1"></GoArrowUpRight>
                    </span>

                    <span className="flex justify-start items-center border-2 p-1 rounded-md bg-white mb-1"  onClick={navigateLinkedinProfile}>
                        <FaLinkedin className="w-6 h-6 ms-2 me-3 text-blue-700"></FaLinkedin>
                        <span className="border-l-2 pl-1 cursor-pointer hover:text-blue-700">Yan Paing (Leon) Phyoe</span>
                        <GoArrowUpRight className="w-4 h-4 ms-1"></GoArrowUpRight>
                    </span>

                </motion.div>
            </motion.div>)}
            </AnimatePresence>
        </>
    )
}

export default Home;