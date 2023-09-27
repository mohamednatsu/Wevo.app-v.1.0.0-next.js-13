import React from 'react'
import Link from 'next/link';
function NavbarPc() {
    let btn = ' transition-all ease-in-out font-bold hover:scale-105  w-[100px] h-[50px] p-2 border-none rounded-lg shadow-md bg-gradient-to-bl from-violet-500 to-teal-500 text-white text-center ml-3';
    let btn2 = ' transition-all ease-in-out font-bold hover:scale-105  w-[100px] h-[50px] p-2 border-none rounded-lg shadow-md bg-teal-500 text-white text-center ml-3';
    return (
        <div>
            <ul className='lg:flex  my-3 gap-[50px] hidden justify-between text-lg items-center'>
                <li className=' hover:text-violet-500 transition-all ease-in'>
                    <Link href="/about">About</Link>
                </li>
                <li className=' hover:text-violet-500 transition-all ease-in'>
                    <Link href="/blogs">Blogs</Link>
                </li>
                <li className=' hover:text-violet-500 transition-all ease-in'>
                    <Link href="/contact">Contact</Link>
                </li>
                <div className=" flex justify-between items-center text-center gap-3">
                    <button className={btn2}>
                        <Link href="/login">Log In</Link>
                    </button>
                    <button className={btn}>
                        <Link href="/signup">Sign Up</Link>
                    </button>
                </div>
            </ul>
        </div>
    )
}

export default NavbarPc