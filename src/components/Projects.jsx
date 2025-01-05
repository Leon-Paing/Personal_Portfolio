import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { PiArrowSquareInFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";


const Projects = () => {

    const navigateToEnduraDrive = () => {
        window.open("https://endura-drive.vercel.app/");
    }

    const navigateToEnduraDriveRepo = () => {
        window.open("https://github.com/Leon-Paing/Endura-Drive");
    }

    const navigateToGoNews = () => {
        window.open("https://go-news-lemon.vercel.app/");
    }

    const navigateToGoNewsRepo = () => {
        window.open("https://github.com/Leon-Paing/go_news");
    }

    const navigateToRunThroughShoes = () => {
        window.open("https://run-through-shoes.vercel.app/");
    }

    const navigateToRunThroughShoesRepo = () => {
        window.open("https://github.com/Leon-Paing/RunThroughShoes");
    }

    return(
        <>
            <div className="w-full flex flex-col justify-center items-center mt-10 border-t-2">
                <div className="w-full flex p-0 justify-center items-center text-4xl mt-6 font-pacifico underline">
                    <span className="flex justify-center items-center">
                        Projects 
                        <AiOutlineFundProjectionScreen className="ms-2"></AiOutlineFundProjectionScreen>
                    </span>
                </div>

                <div className="w-full flex flex-col justify-center items-center tracking-wider">
                    <div className="w-full p-2 flex xl:flex-row xs:flex-col text-2xl">
                        <div className="xl:w-1/2 xs:w-full flex justify-center items-center p-1">
                            <video src="/enduraProject.mp4" className="w-full rounded " autoPlay loop muted></video>
                        </div>
                        <div className="xl:w-1/2 xs:w-full flex flex-col justify-center items-center">
                            <span className="w-full flex float-start text-3xl font-pacifico mb-3 p-1 border-l-4">Endura Drive</span>
                            <div>
                                Endura Drive is a dynamic car dealership platform based in Myanmar, enabling users to buy and sell both new and used vehicles.
                            </div>
                            <div className="w-full flex justify-start items-center mt-3 mb-4 text-xl">
                                Developed using :
                            </div>
                            <div className="w-full flex justify-start items-center text-3xl">
                                <FaReact className=" text-sky-400 me-3"></FaReact>
                                <SiVite className="me-3 text-yellow-500"></SiVite>
                                <RiTailwindCssFill className="text-sky-400 me-3"></RiTailwindCssFill>
                                <SiFramer className="me-3"></SiFramer>
                                <TbBrandVercel></TbBrandVercel>
                            </div>
                            <div className="w-full flex justify-start items-center mt-3 ">
                                <div className="flex justify-center items-center text-lg border-2 p-2 rounded-lg cursor-pointer" onClick={navigateToEnduraDrive}>
                                    <span>Live Demo</span>
                                    <PiArrowSquareInFill className="ms-2 text-2xl"></PiArrowSquareInFill>
                                </div>

                                <div className="flex justify-center items-center text-lg border-2 p-2 rounded-lg ms-2 cursor-pointer" onClick={navigateToEnduraDriveRepo}>
                                    <span>GitHub Repo</span>
                                    <FaGithub className="ms-2 text-2xl"></FaGithub>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-2 flex xl:flex-row xs:flex-col text-2xl">
                        <div className="xl:w-1/2 xs:w-full flex justify-center items-center p-1">
                            <video src="/gonewsproject.mp4" className="w-full rounded" autoPlay loop muted></video>
                        </div>
                        <div className="xl:w-1/2 xs:w-full flex flex-col justify-center items-center">
                            <span className="w-full flex float-start text-3xl font-pacifico mb-3 p-1 border-l-4">GoNews</span>
                            <div>
                                Built with React, this project is a news webite with API integration providing news article for selected category.
                            </div>
                            <div className="w-full flex justify-start items-center mt-3 mb-4 text-xl">
                                Developed using :
                            </div>
                            <div className="w-full flex justify-start items-center text-3xl">
                                <FaReact className=" text-sky-400 me-3"></FaReact>
                                <SiVite className="me-3 text-yellow-500"></SiVite>
                                <RiTailwindCssFill className="text-sky-400 me-3"></RiTailwindCssFill>
                                <TbBrandVercel></TbBrandVercel>
                            </div>
                            <div className="w-full flex justify-start items-center mt-3 ">
                                <div className="flex justify-center items-center text-lg border-2 p-2 rounded-lg cursor-pointer" onClick={navigateToGoNews}>
                                    <span>Live Demo</span>
                                    <PiArrowSquareInFill className="ms-2 text-2xl"></PiArrowSquareInFill>
                                </div>
                                <div className="flex justify-center items-center text-lg border-2 p-2 rounded-lg cursor-pointer" onClick={navigateToGoNewsRepo}>
                                    <span>GitHub Repo</span>
                                    <FaGithub className="ms-2 text-2xl"></FaGithub>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-2 flex xl:flex-row xs:flex-col text-2xl">
                        <div className="xl:w-1/2 xs:w-full flex justify-center items-center p-1">
                            <video src="/runthroughProject.mp4" className="w-full rounded" autoPlay loop muted></video>
                        </div>
                        <div className="xl:w-1/2 xs:w-full flex flex-col justify-center items-center">
                            <span className="w-full flex float-start text-3xl font-pacifico mb-3 p-1 border-l-4">Run Through Shoes</span>
                            <div>
                                Run Through Shoes is a React-based e-commerce platform for footwear.
                            </div>
                            <div className="w-full flex justify-start items-center mt-3 mb-4 text-xl">
                                Developed using :
                            </div>
                            <div className="w-full flex justify-start items-center text-3xl">
                                <FaReact className=" text-sky-400 me-3"></FaReact>
                                <SiVite className="me-3 text-yellow-500"></SiVite>
                                <SiFramer className="me-3"></SiFramer>
                                <TbBrandVercel></TbBrandVercel>
                            </div>
                            <div className="w-full flex justify-start items-center mt-3 ">
                                <div className="flex justify-center items-center text-lg border-2 p-2 rounded-lg cursor-pointer" onClick={navigateToRunThroughShoes}>
                                    <span>Live Demo</span>
                                    <PiArrowSquareInFill className="ms-2 text-2xl"></PiArrowSquareInFill>
                                </div>

                                <div className="flex justify-center items-center text-lg border-2 p-2 rounded-lg ms-2 cursor-pointer" onClick={navigateToRunThroughShoesRepo}>
                                    <span>GitHub Repo</span>
                                    <FaGithub className="ms-2 text-2xl"></FaGithub>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;