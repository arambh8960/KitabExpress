import User from "../model/user.model.js";
import bcrypt from "bcryptjs";


// ================== SIGNUP ==================
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      email,
      password: hashedPass,
    });

    return res.status(200).json({
      status: true,
      message: "Signup successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });

  } catch (err) {
    console.log("Signup Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};


// ================== LOGIN ==================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    return res.status(200).json({
      status: true,
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });

  } catch (err) {
    console.log("Login Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
