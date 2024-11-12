import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { GiSplitCross } from "react-icons/gi";
import { MdOutlineFacebook } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {

    const [contactBoxVisible, setContactBoxVisible] = useState(false);

    const toggleContactBox = () => {
        setContactBoxVisible(!contactBoxVisible);
    }

    const navigateFacebookProfile = () => {
        window.open("https://www.facebook.com/yan.p.phyoe.75")
    }

    const navigateGitHub = () => {
        window.open("https://github.com/Leon-Paing")
    }

    return(
        <>
         
            <nav className="w-screen h-auto flex justify-between items-center top-0 fixed z-50 p-2">
                <div className="w-1/2 flex flex-col justify-start items-start">
                    <div className="w-auto h-auto pl-1 pr-5 flex items-center justify-start rounded-lg border-2 bg-white">
                        <img src="/Profile.jpeg" alt="profile" className="w-6 h-6 rounded-full me-2"/>
                        <span className="text-lg">Leon</span>
                    </div>
                    <div className="w-auto h-auto flex items-center justify-center pl-1">
                    <AnimatePresence>
                        <motion.span 
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop', ease: 'linear'}}
                        >
                            <FaRegCircleDot className="text-green-500 me-2"></FaRegCircleDot>
                        </motion.span>
                    </AnimatePresence>

                        <span className="text-base flex items-center justify-center">Open for work</span>
                    </div>
                    
                </div>
                <div className="w-1/2 h-auto flex flex-col justify-center xl:items-center xs:items-end">
                    <span className="flex justify-center items-center p-1 border-2 rounded-md mb-1 bg-white cursor-pointer" onClick={toggleContactBox}>
                        <FiMail className="w-6 h-6"></FiMail>
                    </span>
                    <span className="flex justify-center items-center border-2 p-1 rounded-md bg-white cursor-pointer" onClick={toggleContactBox}>
                        <FaGithub className="w-6 h-6"></FaGithub>
                    </span>
                </div>
            </nav>

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
                        <span className="border-l-2 pl-1">yanpaingwork.profession@gmail.com</span>
                    </span>

                    <span className="flex justify-start items-center border-2 p-1 rounded-md bg-white mb-3 shadow-sm shadow-gray-300"  onClick={navigateGitHub}>
                        <FaGithub className="w-6 h-6 ms-2 me-3"></FaGithub>
                        <span className="border-l-2 pl-1 cursor-pointer hover:text-slate-600">Leon-Paing</span>
                        <GoArrowUpRight className="w-4 h-4 ms-1"></GoArrowUpRight>
                    </span>

                    <span className="flex justify-start items-center border-2 p-1 rounded-md bg-white mb-1"  onClick={navigateFacebookProfile}>
                        <MdOutlineFacebook className="w-6 h-6 ms-2 me-3 text-blue-700"></MdOutlineFacebook>
                        <span className="border-l-2 pl-1 cursor-pointer hover:text-blue-700">Leon</span>
                        <GoArrowUpRight className="w-4 h-4 ms-1"></GoArrowUpRight>
                    </span>

                </motion.div>
            </motion.div>)}
            </AnimatePresence>
        </>
    )
}

export default Contact;