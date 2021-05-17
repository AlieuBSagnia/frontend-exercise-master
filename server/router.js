const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render("home", {
		meta: req.app.get('meta'),
		article: req.app.get("article"),
		posts: req.app.get("posts"),
	});
});
router.get("/einstein-and-churchill-both-took-daily-naps", (req, res) => {
	res.render("post", {
		article: req.app.get("article"),
		
	});
});

module.exports = router;
