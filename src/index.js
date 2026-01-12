
import dotenv from "dotenv"
import connectDBI from "./db/indexDB.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
});


connectDBI()
.then(() => {
    app.on("ERROR",(erro) => {
        console.log("ERROR",erro);
        throw erro
    })
    app.listen(process.env.PORT || 8000,() => {
       console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch( (err) => {
  console.log("Mongo DB ERROR !! ",err);
  
})







/*import express from "express"
const app = express()
(async ()=> {
    try {
       await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
       app.on("Error",(error)=>{
        console.log("Error",error)
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`app is listen on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("Error :",error)
        throw error
    }
})()*/