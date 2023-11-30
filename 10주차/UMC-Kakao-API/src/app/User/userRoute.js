import express from "express"
import { jwtMiddleware } from "../../../config/jwtMiddleware.js";
import {login} from "./userController.js";

const userRouter = express.Router();


userRouter.post('/login', login);

export default userRouter;

