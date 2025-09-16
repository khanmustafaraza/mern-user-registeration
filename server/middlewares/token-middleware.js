const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res
        .status(401)
        .json({ error: "No token provided. Please login." });
    }

    const tokenString = token.split(" ")[1];
    console.log("first", tokenString);

    // Verify token
    const data = jwt.verify(tokenString, process.env.JWT_SECRET);

    // Check expiration manually (optional, jwt.verify also throws if expired)
    const currentTime = Math.floor(Date.now() / 1000); // in seconds
    if (data.exp < currentTime) {
      return res
        .status(401)
        .json({ error: "Token expired. Please login again." });
    }

    // Attach data to request
    req.user = data;
    req.token = tokenString;

    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    // Send 401 if token invalid or expired
    return res
      .status(401)
      .json({ error: "Invalid or expired token. Please login again." });
  }
};

module.exports = verifyToken;
