const router = require("express").Router();
const user = require("../controller/user.controller");

router.post("/register", user.getAlluser);
router.post("/login", user.loginuser);

module.exports = router;
