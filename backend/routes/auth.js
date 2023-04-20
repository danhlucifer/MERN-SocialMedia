const { registerUser, loginUser } = require("../controller/authController");

const router = require("express").Router();

// register
router.post("/register", registerUser);

router.post("/login", loginUser)




module.exports = router;