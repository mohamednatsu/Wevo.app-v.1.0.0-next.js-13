"use client"
import React, { useState } from 'react'
import {BsSend} from 'react-icons/bs'
import {CgMenuBoxed} from 'react-icons/cg'

// 



function page() {

    const [messages, setMessages] = useState([
        {
            message: "Hello, I am Chat Gpt",
            sender: "ChatGPT",
        }
    ])

    const handleMessage = async (mess) => {
        const newMessge = {
            message: mess,
            sender: 'user'
        }
        
        const newMessges = [...messages, newMessge];

        setMessages(newMessges);
    }

    const styleNav = {
        "width": "100%",
        "padding": "10px 20px",
        "backgroundColor": "white",
    }

    return (
        <div className=' flex h-screen justify-center items-center w-full'>
            <div className="flex w-full h-full ">
                <div className=" hidden p-5 w-1/4 h-full bg-violet-500 rounded-sm justify-center gap-10 items-center shadow-md lg:flex flex-col mx-auto">
                    <div className=' w-40 h-40 bg-gradient-to-bl from-violet-500 to-teal-500  rounded-full shadow-md '>
                    </div>
                    
                        <div className=" text-2xl text-white flex flex-col justify-center items-center w-auto mb-4">
                            <h2>Mohamed Salih</h2>
                            <h3 className='text-xl my-3'>Status: I am very happy Now</h3>
                        </div>
                </div>
                <div className=" lg:w-3/4 w-full bg-slate-400 flex justify-center items-center flex-col">
                    <div className=" lg:hidden flex justify-between items-center shadow-md rounded-bl-2xl border-b-2 border-violet-500" style={styleNav}>
                        <h2 className='my-3 text-2xl font-bold text-violet-500'>
                                Wevo.
                        </h2>
                        <CgMenuBoxed size={40} className=' lg:hidden flex'/>
                    </div>
                    <div className=" relative text-white w-full h-full bg-slate-400 flex justify-around items-end mb-3 flex-row">
                        {messages.map((message, i) => {
                            return (
                                <div key={i} className=" text-center p-3 lg:text-2xl text-lg bg-violet-500 text-white w-1/3 h-auto rounded-full rounded-br-none absolute bottom-[100px] right-7 ">

                                        {message.sender}
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className=" justify-center items-center w-full h-auto mx-2 flex px-2 py-2 mb-3">
                        <input  placeholder='Enter The Messege..' type="text" className=' transition-all ease-in-out w-[93%] h-14 outline-none rounded-md p-3 shadow-md text-xl focus:border focus:border-teal-500'/>
                        <button onClick={handleMessage}  className='flex transition-all ease-in-out font-bold hover:scale-105 p-3 border-none bg-gradient-to-bl from-violet-500 to-teal-500 justify-center items-center ml-3 bg-slate-300 w-12 h-12 rounded-full shadow-md text-white' >
                            <BsSend size={30}/>
                        </button >
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page