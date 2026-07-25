import express from "express";
import authMiddleware from "../middlewares/auth.js";
import {
  placeOrder,
  updataStatus,
  verifyOrder,
} from "../controllers/orderController.js";
import { userOrders } from "../controllers/orderController.js";
import { listOrders } from "../controllers/orderController.js";
const orderRouter = express.Router();
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updataStatus);
export default orderRouter;
