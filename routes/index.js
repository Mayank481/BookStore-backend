const router = require("express").Router();

router.use("/users", require("./user"));
router.use("/auth", require("./auth"));
router.use("/book", require("./books"));

module.exports = router;
