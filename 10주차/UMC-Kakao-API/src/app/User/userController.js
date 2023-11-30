import { errResponse, response } from "../../../config/response.js";
import baseResponse from "../../../config/baseResponseStatus.js";

export const login = async (req,res)=>{
    const {username, password} = req.body;
    console.log(username)
    console.log(password)
    return res.send("success");
}
