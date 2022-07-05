const router = require('express').Router();
const book = require("../controller/book.controller");


router.get('/getAllBooks',book.getAllBooks);
router.post('/publishbook',book.publishbook);
router.post('/approve',book.approvebook);
router.post('/singlebookrecord',book.singlebookrecord);
router.post('/privacy',book.privacy);

module.exports = router;