import BannerImage from "../assets/bibash.png"
import BannerBackground from "../assets/banner_wallpaper.svg"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Typed from "typed.js";
import { useEffect, useRef } from "react";




export default function Banner() {
    const el = useRef(null);
useEffect(()=>{
    const typed = new Typed(el.current, {
        strings: ["Frontend Developer","Backend Developer" ], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 100,
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 100,
        loop:true,
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };

},[])
    return (
        <>
            <div
                style={
                    {
                        backgroundImage: `url(${BannerBackground})`,
                        backgroundSize: "cover",
                    }
                }
                className='main-container flex items-center'>

                <div className=' w-full flex justify-center items-center text-white'>
                    {/* text */}
                    <div className='w-2/3 space-y-2 mx-auto'>
                        <h3 className=' text-3xl font-semibold'>Hi, I am</h3>
                        <h1 className='  text-5xl font-bold'>Bibash Bhattarai</h1>
                        <h2 className=' text-3xl '>And I am <span className="font-bold underline" ref={el}></span></h2>
                        <p className=''>I'm very energetic and love to code.</p>
                        <div className='icon-conatiner flex space-x-5  text-2xl '>

                            <div className=' hover:bg-orange-600 border cursor-pointer h-10 w-10 bg-gray-800 rounded-full flex justify-center items-center'>
                                <FaFacebook />
                            </div>
                            <div className=' hover:bg-orange-600 border cursor-pointer  h-10 w-10 bg-gray-800 rounded-full flex justify-center items-center'>

                                <FaInstagram />
                            </div>
                            <div className='  hover:bg-orange-600 border cursor-pointer h-10 w-10 bg-gray-800 rounded-full flex justify-center items-center'>

                                <FaLinkedin />
                            </div>
                            <div className=' hover:bg-orange-600 border cursor-pointer  h-10 w-10 bg-gray-800 rounded-full flex justify-center items-center'>

                                <SiGmail />
                            </div>




                        </div>
                        <br />
                        <a className=' text-2xl font-bold px-3 py-2 bg-orange-500 rounded-full shadow' href="/contact">Contact Me</a>
                    </div>

                </div>

                <div className='  flex justify-center '>
                    {/* image */}
                    <img className="  w-fit" src={BannerImage} />
                </div>

            </div>
        </>
    )
}
