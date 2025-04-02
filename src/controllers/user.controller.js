import {asynHandler} from "../utils/asynHandler.js" 


const resgisterUser=asynHandler (async(req,res)=>{
    res.status(200).json({
        message:'ok'

    })
})
 export {resgisterUser}