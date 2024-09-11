import React from 'react'

function Header() {

  return (
    <div className='flex justify-between items-center shadow-md p-5 font-bold'>
        <img src='/logo.svg' width={50} height={100} />

        <ul className='hidden md:flex gap-16'>
            <li className='font-bold hover:scale-105 translate-all cursor-pointer hover:text-primary'>Home</li>
            <li className='font-bold hover:scale-105 translate-all cursor-pointer hover:text-primary'>Search</li>
            <li className='font-bold hover:scale-105 translate-all cursor-pointer hover:text-primary'>New</li>
            <li className='font-bold hover:scale-105 translate-all cursor-pointer hover:text-primary'>Preowned</li>
        </ul>
    
    <div>
        <button>Log in</button>
    </div>

    </div>
  )
}

export default Header