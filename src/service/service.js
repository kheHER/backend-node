
import jwt from "jsonwebtoken";
import { SECREAT_KEY } from "../config/globlaykey.js";
export const GenerateToken =(user)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let token = jwt.sign({_id: user._id, phoneNumber: user.phoneNumber},
            SECREAT_KEY, 
            {expiresIn: "7d"}
        );
            console.log(token);
            resolve({token});
            
        } catch (error) {
            reject(error);
        }

    });
};