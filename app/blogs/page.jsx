import React, { Suspense } from 'react'
import Blog from './Blog'
import {blogs} from './blogs'
import Loading from '../loading'
function page() {
    return (
        <div className=' flex justify-center items-center mx-auto p-4 my-8 flex-col gap-14 '>
            <h2 className=' mt-10 lg:text-[45px] text-[30px] text-violet-500 font-bold text-center p-2'>Blogs</h2>
            {blogs.map((blog) => (
                <Suspense fallback={<Loading />}>
                <Blog subtitle={blog.subtitle} src={blog.png} key={blog.id} title={blog.title} />
                </Suspense>
            ))}
        </div>
    )
}

export default page