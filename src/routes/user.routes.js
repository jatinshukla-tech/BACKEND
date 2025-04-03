import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import {resgisterUser} from "../controllers/user.controller.js";
 
const router =Router() 



router.route('/register').post
      upload.fields
        ({name:"avatar",
            maxCount: 1

        }
       ,{
        name:"coverImages",
        maxCount :1
       }

)(resgisterUser)



export default router