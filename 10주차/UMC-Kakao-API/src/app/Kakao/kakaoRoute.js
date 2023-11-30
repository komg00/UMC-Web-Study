import express from "express";
import { KakaoController } from "./kakaoController.js";

const kakaoRouter = express.Router();

kakaoRouter.post("/",KakaoController);

export default kakaoRouter;