import startDB from "@/lib/db"; 
import Demo from "@/models/demo";

/**
 * 
 * @param {import ('next').NextApiRequest} req
 * @param {import ('next').NextApiResponse} res
 * 
 * */ 

export default handler =  (req,res) =>  {
    startDB()
    console.log("Connsction Sucsess!")
    res.status(200).json({name: 'mohamed salih'})
}