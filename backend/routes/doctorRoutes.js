// backend/routes/doctorRoutes.js
const express = require("express");
const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.json({ message: "Doctor routes working fine" });
});

module.exports = router;
