const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {

  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token
    });

  } else {

    return res.status(401).json({
      success: false,
      message: "Invalid Email or Password"
    });

  }

};

module.exports = { loginAdmin };