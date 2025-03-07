import express from "express";
import { loginController, registerController, resetPasswordController, rewritePasswordController, verifyEmailController } from "../controllers/auth.controller.js";
import { createWorkspaceController } from "../controllers/workspace.controller.js";


const authRouter = express.Router();

authRouter.post("/register", registerController)
authRouter.get('/verify-email', verifyEmailController)
authRouter.post('/login', loginController)
authRouter.post('/reset-password', resetPasswordController)
authRouter.put('/rewrite-password', rewritePasswordController)
authRouter.post("/create-workspace", createWorkspaceController)
export default authRouter