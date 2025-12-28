import Cart from "../model/cart.model.js";

export const addToCart = async (req, res) => {
    try {
        const { userId, item } = req.body;
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        const itemExists = cart.items.find((i) => i._id == item._id);
        if (itemExists) {
            return res.status(400).json({ message: "Item is already in the cart!" });
        }

        cart.items.push(item);
        await cart.save();
        res.status(200).json({ message: "Item added to cart", cart: cart.items });
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getCart = async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(200).json([]);
        }
        res.status(200).json(cart.items);
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.items = cart.items.filter((item) => item._id != itemId);
        await cart.save();
        res.status(200).json({ message: "Item removed", cart: cart.items });
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: "Internal server error" });
    }
};
