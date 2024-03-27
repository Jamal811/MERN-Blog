import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  signout,
} from "../controllers/user.contoller.js";
import { varifyToken } from "../utils/varifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", varifyToken, updateUser);
router.delete("/delete/:userId", varifyToken, deleteUser);
router.post("/signout", signout);
export default router;
