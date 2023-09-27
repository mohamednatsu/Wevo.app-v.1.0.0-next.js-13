import Link from 'next/link'
import React from 'react'

function NavbarMobile() {
    var listyle = "my-1 font-bold text-xl"
    var btn = "my-1 text-violet-500 font-bold text-xl bg-white w-full h-auto text-center p-2 rounded-md shadow-sm"
    var btn2 = "my-1 text-teal-500 font-bold text-xl bg-black w-full h-auto text-center p-2 rounded-md shadow-sm"
    return (
        <div className=' transition-all ease-out absolute top-[72px] w-full right-0 flex justify-center items-center h-[303px]  bg-gradient-to-tr from-violet-500 to-teal-500 shadow-md'>
            <ul className=' flex justify-center items-around text-center h-auto absolute flex-col gap-4 px-2 w-max text-white'>
                <li className={listyle}><Link href="/about">About</Link></li>
                <li className={listyle}><Link href="/blogs">Blogs</Link></li>
                <li className={listyle}><Link href="/contact">Contact</Link></li>
                <button className={btn}><Link href="/signup">Sign Up </Link></button>
                <button className={btn2}><Link href="/login">Log In</Link></button>
            </ul>
        </div>
    )
}

export default NavbarMobile