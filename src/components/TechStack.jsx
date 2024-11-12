import React from "react";
import { GoStack } from "react-icons/go";
import { GiMoebiusTriangle } from "react-icons/gi";
import { TiHtml5 } from "react-icons/ti";
import { SiCss3 } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { BiLogoReact } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoGitMergeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { TbBinary } from "react-icons/tb";
import { SiFramework } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";
import { SiVite } from "react-icons/si";

const TechStack = () => {

    return(
        <>
            <div className="w-full flex flex-col justify-center items-center mt-10 border-t-2">
                <div className="w-full flex p-0 justify-center items-center text-2xl mt-6 font-bold font-pacifico">
                    <span className="flex justify-center items-center">
                        Tech-Stack 
                        <GoStack className="ms-2"></GoStack>
                    </span>
                </div>

                <div className="w-full flex xl:flex-row xs:flex-col justify-center items-center p-3 xl:gap-10 xs:gap-1 mt-3">
                    <div className="flex justify-center items-center gap-2 me-1">
                        <GiMoebiusTriangle className="text-blue-500 text-2xl"></GiMoebiusTriangle>
                        <span className="xl:text-xl xs:text-base">Basic</span>
                    </div>

                    <div className="flex justify-center items-center gap-2 me-1">
                        <GiMoebiusTriangle className="text-yellow-500  text-2xl"></GiMoebiusTriangle>
                        <span className="xl:text-xl xs:text-base">Intermediate</span>
                    </div>

                    <div className="flex justify-center items-center gap-1">
                        <GiMoebiusTriangle className="text-red-600 text-2xl"></GiMoebiusTriangle>
                        <span className="xl:text-xl xs:text-base">Upper intermediate</span>
                    </div>
                </div>

                <div className="w-full flex xl:flex-row xs:flex-col justify-center items-center gap-2">
                    <div className="xl:w-1/3 xs:w-full h-[500px] flex flex-col justify-center items-center p-4 rounded-xl shadow-xl mb-5 tracking-wider border-0.5">
                        <span className="w-full flex justify-center items-center text-2xl mb-4 border-b-2 p-4 font-light font-pacifico">Languages
                        <TbBinary className="ms-2 text-4xl text-red-600"></TbBinary>
                        </span>

                        <span className="w-full flex xl:justify-center  xs:justify-evenly items-center gap-5 mb-3 text-2xl">
                            <TiHtml5 className="w-1/6 text-orange-600 text-6xl border-l-2"></TiHtml5>
                            <GiMoebiusTriangle className="w-1/12 text-red-600"></GiMoebiusTriangle>
                        </span>

                        <span className="w-full flex xl:justify-center  xs:justify-evenly items-center gap-5 mb-3 text-2xl">
                            <SiCss3 className="w-1/6 text-sky-600 text-5xl border-l-2"></SiCss3>
                            <GiMoebiusTriangle className="w-1/12 text-red-600"></GiMoebiusTriangle>
                        </span>

                        <span className="w-full flex xl:justify-center xs:justify-evenly items-center gap-5 mb-3 text-2xl">
                            <FaJs className="w-1/6 text-yellow-400 text-5xl border-l-2"></FaJs>
                            <GiMoebiusTriangle className="w-1/12 text-yellow-500"></GiMoebiusTriangle>
                        </span>

                        <span className="w-full flex xl:justify-center  xs:justify-evenly items-center gap-5 mb-3 text-2xl">
                            <TbFileTypeSql className="w-1/6 text-5xl text-[#00758F] border-l-2"></TbFileTypeSql>
                            <GiMoebiusTriangle className="w-1/12 text-yellow-500"></GiMoebiusTriangle>
                        </span>

                        <span className="w-full flex xl:justify-center  xs:justify-evenly items-center gap-5 mb-3 text-2xl">
                            <FaPython className="w-1/6 text-5xl border-l-2"></FaPython>
                            <GiMoebiusTriangle className="w-1/12 text-blue-500"></GiMoebiusTriangle>
                        </span>

                        <span className="w-full flex xl:justify-center  xs:justify-evenly items-center gap-5 mb-3 text-2xl">
                            <SiPhp className="w-1/6 text-[#4F5B93] text-5xl border-l-2"></SiPhp>
                            <GiMoebiusTriangle className="w-1/12 text-blue-500"></GiMoebiusTriangle>
                        </span>
                    </div>

                    <div className="xl:w-2/3 xs:w-full h-[500px] flex flex-col justify-center items-center">
                        <div className="w-full h-1/2 flex flex-col justify-center items-center p-4 xl:mb-3 xs:mb-2 tracking-wider border-b-2">
                            <span className="w-full h-1/2 flex justify-center items-center xl:text-2xl xs:text-xl mb-4 p-3 font-light font-pacifico">Frameworks and Libaries
                            <SiFramework className="ms-2 text-sky-400"></SiFramework>
                            </span>

                            <div className="w-full h-auto flex justify-start items-center p-3 text-2xl overflow-x-scroll overflow-y-hidden">
                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <BiLogoReact className="text-5xl text-sky-500 h-2/3"></BiLogoReact>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-red-600 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <RiTailwindCssFill className="text-5xl text-sky-400 h-2/3 flex justify-center items-center"></RiTailwindCssFill>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-red-600 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <FaBootstrap className="text-5xl text-[#7952B3] h-2/3"></FaBootstrap>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-yellow-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <SiFramer className="text-5xl h-2/3"></SiFramer>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-yellow-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <SiDjango className="text-5xl text-green-700 h-2/3"></SiDjango>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-blue-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <SiPandas className="text-5xl h-2/3"></SiPandas>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-blue-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <SiNumpy className="text-5xl text-[#4F7DB3] h-2/3"></SiNumpy>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-blue-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <SiScikitlearn className="text-5xl text-[#F7931E] h-2/3"></SiScikitlearn>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-blue-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>   
                            </div>
                        </div>  

                        <div className="w-full h-1/2 flex flex-col justify-center items-center p-4 mb-5 tracking-wider border-b-2">

                            <span className="w-full h-1/2 flex justify-center items-center text-2xl font-thin font-pacifico mb-4 p-3">Tools
                            <FaTools className="ms-2 "></FaTools>
                            </span>

                            <div className="w-full h-auto flex xl:justify-center xs:justify-start items-center p-3 text-2xl xl:overflow-hidden xs:overflow-x-auto xs:overflow-y-hidden">

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <VscVscode className="text-5xl text-[#007ACC] h-2/3"></VscVscode>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-red-600 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <IoGitMergeOutline className="text-5xl text-[#F05033] h-2/3"></IoGitMergeOutline>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-blue-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <FaGithub className="text-5xl h-2/3"></FaGithub>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-blue-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <SiJupyter className="text-5xl text-[#F37626] h-2/3"></SiJupyter>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-blue-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <SiCanva className="text-5xl text-[#00C4CC] h-2/3"></SiCanva>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-blue-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <TbBrandVercel className="text-5xl h-2/3"></TbBrandVercel>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-blue-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                                <span className="h-28 flex flex-col justify-center items-center gap-4 border-r-2 p-2">
                                    <SiVite className="text-5xl text-yellow-500 h-2/3"></SiVite>
                                    <span className="flex justify-center items-center text-base h-1/3">
                                        Status:
                                        <GiMoebiusTriangle className="ms-2 text-blue-500 text-2xl"></GiMoebiusTriangle>
                                    </span>
                                </span>

                            </div>
                            
                        </div> 
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default TechStack;