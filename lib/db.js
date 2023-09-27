import mongoose from "mongoose";



const startDB = async () => mongoose.connect("mongodb://localhost:27017");

export default startDB;