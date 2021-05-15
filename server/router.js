const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render("home", {
		meta: req.app.get('meta'),
		article: req.app.get("article"),
		posts: req.app.get("posts"),
	});
});

module.exports = router;
