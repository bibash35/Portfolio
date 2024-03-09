import { useState } from "react"
import BannerImage from "../assets/bibash.png"

export default function About() {
  const [data, setData] = useState({
    image: BannerImage,
    title: "Web developer",
    desc1: `A web developer is a skilled professional responsible for designing, coding, and maintaining websites. They possess expertise in programming languages such as HTML, CSS, and JavaScript.`,
    desc2:`Web developers collaborate with clients to understand requirements, implement responsive designs, and optimize site performance for optimal user experience and helps to  create, maintain, and optimize websites, implementing responsive designs.`

  })
  return (
    <>
      <div className='main-container border bg-gray-100 py-10'>
        <h1 className="text-5xl underline text-center font-bold pb-16">About Me</h1>

        <div className="main-box flex items-center">

          <div className=" w-full flex justify-center ">
            {/* for image */}
            <img className="h-80 w-fit rounded-b-full " src={data.image} />
          </div>

          <div className=" w-full  flex justify-center">
            {/* for text */}
            <div className="space-y-5 w-2/3 ">
              <h1 className="text-4xl  font-semibold">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2  text-2xl rounded-full font-bold"> Read More...</button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
