import { listOrders, placeOrder, updateStatus, usersOrder, verifyOrder } from "../controllers/orderController.js";
import express from "express";
import authMiddleWare from "../middleware/auth.js"

const orderRouter = express.Router();


orderRouter.post("/place",authMiddleWare,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleWare,usersOrder);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);

export default orderRouter;