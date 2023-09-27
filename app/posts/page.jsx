import MainInfo from "../components/MainInfo"
import Post from "../components/Post"
import { users } from './data'


function page() {
    return (
        <div className=" my-5 container flex flex-col justify-evenly items-center p-4 gap-7">
            <h2 className=" lg:text-[45px] text-[30px] my-6 text-left text-violet-500 font-bold">Posts</h2>
            <div className="flex flex-col justify-evenly items-center p-4 gap-36">
            {users.map((user) => (
                <Post key={user.id} avatar={user.avatar} png={user.png} name={user.name} />
            ))}
            </div>
        </div>
    )
}

export default page