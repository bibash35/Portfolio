import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { CiServer } from "react-icons/ci";



export default function Services() {
    return (
        <>
            <div className='main-container py-10'>
                <h1 className='text-5xl underline text-center font-bold'>My Services</h1>

                <div className="services-container flex mt-14 space-x-5 px-10">
                    <div className='service1 space-y-4 shadow-lg rounded-xl  bg-slate-200 p-5 text-center cursor-pointer hover:bg-gray-100'>
                        <div className="text-5xl  flex justify-center "><CgWebsite /></div>
                        <h1 className='text-4xl'>Web Development</h1>
                        <p>Web development involves creating and maintaining websites, employing various technologies like HTML, CSS, JavaScript, and backend frameworks for dynamic functionality.</p>
                        <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-xl font-bold'>Check</button>
                    </div>
                    <div className='service2 space-y-4 shadow-lg rounded-xl bg-slate-200 p-5 text-center cursor-pointer hover:bg-gray-100'>
                        <div className="text-5xl flex justify-center "><FaReact /></div>
                        <h1 className='text-4xl'>React</h1>
                        <p>React is a JavaScript library for building user interfaces, enabling the creation of interactive and efficient UI components for web applications.</p>
                        <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-xl font-bold'>Check</button>
                    </div>
                    <div className='service3 space-y-4 shadow-lg rounded-xl bg-slate-200 p-5 text-center cursor-pointer hover:bg-gray-100'>
                        <div className="text-5xl flex justify-center"><CiServer /></div>
                        <h1 className='text-4xl'>Backend Development</h1>
                        <p>Backend development involves creating and maintaining server-side logic, databases, and application integration to ensure the functionality and performance of web applications.</p>
                        <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-xl font-bold'>Check</button>
                    </div>

                </div>
            </div>
        </>
    )
}
