import mongoose from "mongoose";
 
export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT"
    }).then(()=>{
        console.log("Connected to database succcessfully!");

    }).catch((err)=>{
        console.log(`some error occured while connecting database! ${err}`)
    })
}

