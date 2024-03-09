import BannerBackground from "../assets/banner_wallpaper.svg"

export default function Expertise() {
    return (
        <>
            <div className="mt-2 ">
                <h1 className=" mb-16 text-5xl font-bold underline text-center">My Expertise</h1>
                {/* box section */}

                <div 
                 style={
                    {
                        backgroundImage: `url(${BannerBackground})`,
                        backgroundSize:"cover"
                    }
                }
                className="main-box items-center flex my-16 ">

                    <div className="flex justify-center items-center text-white ">
                          {/* text container */}
                          <div className="w-2/3 text-center space-y-4 my-8 ">
                          <h1 className="font-bold">I love  programming languages</h1>
                          <p>Web development merges creativity with problem-solving, offering endless possibilities. Fueling my passion for innovation</p>
                          <button className=" px-2 py-1 bg-orange-500 rounded-full shadow-lg text-xl">Hire Me</button>
                          </div>
                    </div>

                    <div className="flex justify-center">
                       {/* skills container */}
                       <div className="flex w-2/3 h-fit space-x-3 flex-wrap justify-center">
                       <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">AWS</p>
                       <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">Javascript</p>
                       <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">React</p>
                       <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">Angular</p>
                       <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">NodeJs</p>
                       <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">NextJs</p>
                       <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">Python</p>
                       <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">PHP</p>
                       <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">Mongo DB</p>
                       <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer"  >Json</p>
                       </div>
                    </div>

                </div>

            </div>
        </>
    )
}
