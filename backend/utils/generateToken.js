const jwt = require("jsonwebtoken");
const generateToken = (id, role) => {
  return jwt.sign(
    { id, role },
    process.env.JWT_SECRET || "your_fallback_secret",
    {
      expiresIn: "30d",
    }
  );
};
module.exports = generateToken;
