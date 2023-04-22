
import Models from "../model/index.js";
import { SendError400, SendError401, SendError500, SendSuccess, } from "../service/response.js";
import { GenerateToken } from "../service/service.js";
import { ValidateRegister } from "../service/validate.js";

export default class Usercontroller {
    static async register (req,res){
        try{
            const {firstName, lastName, phoneNumber,password} = req.body;
            const validate = ValidateRegister(req.body);
            if(validate.length > 0 ){
                return SendError400(res,"Please Input:" + validate.join(","));
            }
            const userExit = await Models.User.findOne({phoneNumber});
            if(userExit){
               return SendError401(res,"Already PhoneNumber!");
            }
            const user = new Models.User({
                firstName, lastName, phoneNumber, password
            });
            const result = await user.save();
            const token = await GenerateToken(result)


            SendSuccess(res,"Register Successful", result);
            /*{
                return res.status(400).json({status: false,message: "FirstName is req"});
            }
            if(!firstName){
                return res.status(400).json({status: false,message: "FirstName is req"});
            }*/
        } catch (error){
            console.log(error);
            SendError500(res,"Error Register ",error)
        }
    }
}