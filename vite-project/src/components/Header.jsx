import React, { useState } from 'react'

export default function Header() {

  const[brandName,setBrandName]=useState("Bibash Bhattarai");
  const[menuLinks,setMenuLinks]=useState([
    {
      title:"Home",
      link:"/Home",
      id:1,
    },
    {
      title:"About",
      link:"/About",
      id:2,
    },
    {
      title:"Skill",
      link:"/Skill",
      id:3,
    },
    {
      title:"Portfolio",
      link:"/Portfolio",
      id:4,
    },
    {
      title:"Contacts",
      link:"/Contacts",
      id:5,
    },
   
  ]);

  const[actionButton, setActionButton]=useState({
    title:"Download CV",
    link:"/hire-me",
  });
  return <>
<div className='main h-20 border flex justify-between items-center px-16  bg-gray-100'> 

<div>
    {/* brand logo */}
    <h1 className='text-2xl font-bold'>{brandName}</h1>
</div>

<div className='space-x-6'>
    {/* menu */}
   {menuLinks.map(link=>(
        <a key={link.id}href={link.link} className='hover:text-orange-600'>{link.title}</a>

   ))}
   
    {/* <a href="/about" className='hover:text-orange-600'>About</a>
    <a href="/skills" className='hover:text-orange-600'>Skills</a>
    <a href="/portfolio" className='hover:text-orange-600'>Portfolio</a>
    <a href="/contacts" className='hover:text-orange-600'>Contacts</a> */}
</div>

<div>
{/* button */}
<a href={actionButton.link}className='px-4 py-2 bg-orange-600 rounded-full font-bold shadow text-1xl'>{actionButton.title}</a>
</div>

    </div>  
  </>
}
