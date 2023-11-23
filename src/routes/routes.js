import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { registerUser, loginUser, toRent } from "../controllers/user.controller.js";

const router = Router();
// router.use();

router.post('/signIn', loginUser);
router.post('/signUp', registerUser);
router.post('/toRent', toRent);

export { router };