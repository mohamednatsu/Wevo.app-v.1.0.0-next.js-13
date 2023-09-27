'use client'


import Image from 'next/image'
import React, { useState } from 'react'
import png from './Img/jogo.jpg'

import {AiOutlineHeart, AiFillHeart, AiOutlineComment} from 'react-icons/ai'
function Post(props) {
    const colorfill = 'rgb(139 92 246)';
    const [color, setColor] = useState(false);

    const handleColor = () => {
        setColor(true)
    }

    const handleColorEmpty = () => {
        setColor(false)
    }
    return (
        <div className=' md:w-[700px] w-[350px] flex flex-col justify-center gap-8 p-6 bg-white shadow-md rounded-sm'>
            <div className=" flex flex-row-reverse  justify-stretch items-center my-4 p-3 gap-4">
                <Image 
                    width={50}
                    height={50}
                    alt='avatar'
                    src={props.avatar}
                    className=' rounded-full '
                />
                <h4>
                    {props.name}
                </h4>
            </div>
            <div className=" justify-center items-center flex">
                <Image 
                    width={400}
                    height={300}
                    alt='png'
                    src={props.png}
                    className=' rounded-sm'
                />
            </div>
            <div className=" p-3 flex flex-row justify-start items-center gap-10 my-2">
                {color? <AiFillHeart onClick={handleColorEmpty} color={colorfill}  size={30} className=' cursor-pointer'/> : <AiOutlineHeart onClick={handleColor} size={30} className=' cursor-pointer'/> }
                <AiOutlineComment color={color} size={30} className=' cursor-pointer'/>
            </div>
        </div>
    )
}

export default Post