import React from "react";
import { IoIosReturnRight } from "react-icons/io";
import { PiCertificateLight } from "react-icons/pi";
import { BiLogoReact } from "react-icons/bi";
import { SiGoogleforms } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiUserFocusLight } from "react-icons/pi";

const AboutMe = () => {

    return(
        <>
            <div className="w-full flex justify-center items-center p-1 text-6xl text-center font-snell font-normal mt-56 mb-80">
            "Developer by Profession, Tech Enthusiast by Nature – Here to Code the Future!"
            </div>

            <div className="w-full flex flex-col justify-start items-start p-3">
                <div className="text-2xl">Quick Interview</div>
                <div className="text-6xl flex justify-center items-center">
                    About me
                    <PiUserFocusLight className="ms-2"></PiUserFocusLight>
                </div>
            </div>

            <div className="w-full flex flex-wrap tracking-wider">
                <div className="xl:w-2/3 xs:w-full xl:h-[310px] xs:h-[450px] flex flex-col justify-start items-center p-4 rounded-xl  mb-5 xl:shadow-md xs:shadow-2xl">
                    <span className="w-full flex float-left text-2xl mb-3 items-center">Hello! 👋</span>
                    <span className="w-full flex float-left text-3xl mb-3  items-center">I’m Yan Paing Phyoe aka Leon 🧑🏻‍🔬 ,</span>
                    <div className="w-full flex float-left text-xl xl:text-justify xs:text-left mb-2">A passionate tech enthusiast and quick learner dedicated to harnessing technology for innovative solutions.</div>
                    <div className="w-full flex float-left text-xl xl:text-justify xs:text-left mb-5">With a positive attitude and a strong work ethic, I thrive in collaborative environments, eager to contribute and grow alongside my team.</div>
                    
                    {/* <div className="w-full text-2xl flex items-center">
                            <span>Download CV</span> 
                            <IoIosReturnRight className="ms-2"></IoIosReturnRight>
                            <SiGoogleforms className="ms-2 text-2xl text-blue-700 cursor-pointer">
                            </SiGoogleforms>
                    </div> */}

                </div>

                {/*Education*/}
                <div className="xl:w-1/3 xs:w-full xl:h-[310px] xs:h-auto flex flex-col justify-start items-center p-4 rounded-xl shadow-2xl mb-5 tracking-wider">
                    <span className="w-full flex justify-start text-2xl font-semibold mb-2  items-center p-2">Education 🎓
                    </span>
                    <div className="w-full flex flex-col float-left text-xl tracking-wider text-left mb-1 list-disc p-2">
                        <span className="mb-3">Qualified class final year in Computer Science.
                        {/* <div className="flex w-full mt-3 items-center">
                            <span className="text-slate-500">See Proof</span>
                            <IoIosReturnRight className="ms-2"></IoIosReturnRight>
                            <PiCertificateLight className="ms-4 text-4xl text-green-500 cursor-pointer"></PiCertificateLight>
                        </div> */}
                        </span>

                        <span className="mb-3">1+ year of self-employed
                            <b className="text-blue-700 flex items-center"> React Developer.<BiLogoReact className="text-2xl ms-1"></BiLogoReact></b>
                            
                        </span>

                        <span>
                            <b className="flex items-center">Committed to ongoing learning.
                            <FaArrowTrendUp className="ms-2 text-blue-700"></FaArrowTrendUp></b>
                        </span>
                    </div>
                </div>

                {/*Languages*/}
                <div className="xl:w-1/3 xs:w-full xl:h-[310px] xs:h-auto flex flex-col justify-start items-center p-4 rounded-xl shadow-2xl mb-5 border-0.5 border-slate-100">
                    <span className="w-full flex justify-center text-2xl font-semibold mb-10 tracking-wider items-center p-2">
                        Languages 🇲🇲 🇺🇸 🇰🇷
                    </span>
                    <div className="w-full flex flex-col float-left text-xl tracking-wider text-left mb-1 list-disc p-2">
                        <span className="mb-6 flex justify-between items-center">
                            <span className="w-1/2 flex justify-center items-center border-r-2">Burmese 🇲🇲</span>
                            <span className="w-1/2 flex justify-center items-center">Native </span>
                        </span>

                        <span className="mb-6 flex justify-between items-center">
                            <span className="w-1/2 flex justify-center items-center border-r-2">English 🇺🇸</span>
                            <span className="w-1/2 flex justify-center items-center">Intermediate</span>
                        </span>

                        <span className="mb-6 flex justify-between items-center">
                            <span className="w-1/2 flex justify-center items-center border-r-2">Korean 🇰🇷</span>
                            <span className="w-1/2 flex justify-center items-center">Upper Basic</span>
                        </span>
                    </div>
                </div>

                {/*Hobby*/}
                <div className="xl:w-1/3 xs:w-full xl:h-[310px] xs:h-auto flex flex-col justify-start items-center p-4 rounded-xl xl:shadow-md xs:shadow-2xl mb-5">
                    <span className="w-full flex justify-center text-2xl font-semibold mb-1 tracking-wider items-center p-2">Hobbies 📖
                    </span>
                    <div className="w-full flex flex-col float-left text-xl tracking-wider text-left mb-1 list-disc p-2">
                        <span className="mb-3 flex justify-between items-center">
                            <span className="w-full flex justify-start items-center border-l-2 p-2">Reading 📖</span>
                        </span>

                        <span className="mb-3 flex justify-between items-center">
                            <span className="w-full flex justify-start items-center  border-l-2 p-2">Learning new skills 🧑🏻‍💻</span>
                        </span>

                        <span className="mb-3 flex justify-between items-center">
                            <span className="w-full flex justify-start items-center  border-l-2 p-2">Automobiles 🏎️</span>
                        </span>

                        <span className="mb-3 flex justify-between items-center">
                            <span className="w-full flex justify-start items-center  border-l-2 p-2">Music 🎧</span>
                        </span>
                    </div>
                </div>

                {/*Personality*/}
                <div className="xl:w-1/3 xs:w-full xl:h-[310px] xs:h-auto flex flex-col justify-start items-center p-4 rounded-xl xl:shadow-md  xs:shadow-2xl mb-5">
                    <span className="w-full flex justify-center text-2xl font-semibold mb-2 tracking-wider items-center p-2">Personality 🙋🏻
                    </span>
                    <div className="w-full flex flex-col float-left text-xl tracking-wider text-left mb-1 list-disc p-2">
                    <span className="mb-3 flex justify-between items-center">
                            <span className="w-full flex justify-start items-center border-l-2 p-2">Quick Learner 📚</span>
                        </span>

                        <span className="mb-3 flex justify-between items-center">
                            <span className="w-full flex justify-start items-center  border-l-2 p-2">Communicator 🗣️</span>
                        </span>

                        <span className="mb-3 flex justify-between items-center">
                            <span className="w-full flex justify-start items-center  border-l-2 p-2">Team-player 👫🏻</span>
                        </span>

                        <span className="mb-3 flex justify-between items-center">
                            <span className="w-full flex justify-start items-center  border-l-2 p-2">Long-term Commitment 👤</span>
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutMe;