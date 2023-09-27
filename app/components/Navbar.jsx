"use client"

import { useState } from 'react';
import NavbarMobile from './NavbarMobile'
import {TiThMenuOutline} from 'react-icons/ti'
import {IoClose} from 'react-icons/io'
import NavbarPc from './NavbarPc';
import Link from 'next/link';


function Navbar() {
    
    const [open , setOpen] = useState(false)
    const [openmenu , setOpenMenu] = useState(false)

    return (
        <header className=' relative'>
            <div className=" rounded-b-xl flex justify-between items-center h-10 delay-200 bg-white p-[45px] backdrop-blur-sm border-b-2  border-violet-500 shadow-md mx-auto w-auto max-w-full transition-all ease-in">
                <Link href="/">
                    <h2 className='my-3 text-2xl font-bold text-violet-500'>
                            Wevo.
                    </h2>
                </Link>
                <TiThMenuOutline  className=' lg:hidden block h-6 w-6 cursor-pointer absolute right-[40px]' onClick={() => setOpen(!open)}/>
                {open ? <NavbarMobile className=" transition-all ease-in-out delay-150" /> : <NavbarPc />}
        
            </div>
        </header>
    )
}

export default Navbar