import express from  "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin : process.env.cors_orgin,
    credentials :true
}))

app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended : true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


///routes import/////
import userRouter from './routes/user.routes.js'

///routes declartion///
app.use("/user",userRouter)
export { app }