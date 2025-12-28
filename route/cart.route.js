import express from "express";
import { addToCart, getCart, removeFromCart } from "../controller/cart.controller.js";

const router = express.Router();

router.post("/add", addToCart);
router.get("/:userId", getCart);
router.post("/remove", removeFromCart);

export default router;