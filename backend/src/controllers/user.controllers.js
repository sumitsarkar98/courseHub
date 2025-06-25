import db from "../connections/db.connections.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// user Signup
const signup = async (req, res) => {
  try {
    const { fullname, email, password, role, gender } = req.body;

    // Validate input
    if (!fullname || !email || !password || !role || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const [existingUser] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (existingUser.length > 0) {
      return res
        .status(409)
        .json({ message: "User already exists with this email" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed password:", hashedPassword);

    // Insert the user into the database
    const [result] = await db.execute(
      "INSERT INTO users (full_name, email, hashedPassword, role, gender) VALUES (?, ?, ?, ?, ?)",
      [fullname, email, hashedPassword, role, gender]
    );

    return res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal Server Error /controller" });
  }
};

// user Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required for login!" });
    }

    // Find the user in the database
    const [userRows] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (userRows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = userRows[0];

    // Compare the provided password with the hashed one in the DB
    const isPasswordMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Remove password before sending user data (for security)
    delete user.hashedPassword;

    // Create JWT Token (you can include user id or email in the payload)
    const token = jwt.sign(
      { id: user.id, email: user.email }, // payload
      process.env.JWT_SECRET, // secret key
      { expiresIn: "1h" } // token expiration time
    );

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // set to true in production
      sameSite: "Strict",
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    return res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error /controller" });
  }
};

// logout user
const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });

  return res.status(200).json({ message: "Logged out successfully" });
};

// Get logged-in user details
const userProfile = async (req, res) => {
  try {
    // Use user ID from the decoded token
    const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [
      req.user.id,
    ]);

    if (rows.length > 0) {
      // Optionally remove sensitive info
      delete rows[0].hashedPassword;

      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Database query failed:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { signup, login, userProfile, logout }; //named export
