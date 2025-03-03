import dotenv from "dotenv";

import connectDB from "./DB/index.js";
 dotenv.config({
    path:'./env'
 })



connectDB()
.then(()=>{
   app.listen(process.env.PORT|| 8000,()=>{
      console.log(`Server is runing at :${process.env.PORT}`);
      
   })
})
.catch((err)=>{
   console.log("MONOGO db connnection falied!",err);
   
   
})


// import express from "express";
// const app =express();
// (async()=>{

//     try {
//        await mongoose.connect(`${process.env.MOGOODB_URL}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("not talking");
//         throw error
        
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
        
//        })
//     } catch (error) {
//         console.error("ERROR" ,error)
//         throw err
//     }
// })  ()