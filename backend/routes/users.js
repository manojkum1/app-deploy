import express from "express";
import { signUp, login } from "../controller/auth.controller.js";
import {
  loginValidation,
  signupValidation,
} from "../middlewares/AuthValidation.js";

const router = express.Router();

router.post("/signup", signupValidation, signUp);
router.post("/login", loginValidation, login);
// router.get("/sign", (res, req) => {
//   res.status(200).json({ message: "finally" });
// });

export default router;
