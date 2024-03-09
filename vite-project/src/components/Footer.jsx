import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='py-5 border bg-gray-100 flex justify-between px-72 '>
        {/* main div box */}

        <div>
            {/* for all rights */}
            <p>@2023 Bibash Bhattarai <span>All Right Reserved</span></p>

        </div>
        

        <div className='space-x-5'>
            {/* for others */}
            <a href="/about" className="hover:underline">About</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
           <a href="/licensing" className="hover:underline">Licensing</a>
           <a href="/contact" className="hover:underline">Contact</a>
 

        </div>
    </div>
    </>
  )
}
