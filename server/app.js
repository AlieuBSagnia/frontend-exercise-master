const express = require('express');
const exphbs  = require('express-handlebars');
const router = require('./router');
const meta = require("./content/meta.json");
const app = express();
const article = require("./content/article.json");
const posts = require("./content/posts.json");
const moment = require("moment");
const cors = require("cors");
const fetch = require('node-fetch');
const port = 3000;
let url = ''
var hbs = exphbs.create({

	helpers: {
		formatDate: function (datetime, format) {
			return moment(datetime).format(format);
		},
	},
});

hbs.handlebars.registerHelper('ifCond', function(v1, v2, options) {
	// console.log(v1);
	// console.log(v2);
  if(v1 == v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

url = `https://my-json-server.typicode.com/telegraph/frontend-exercise/comments`

	fetch(url)
	.then(response => response.json())
	.then(data => {
		app.set("comments", data);
	})
	.catch(err => console.log(err))

// To do unit testing ; manual testing done with html validator
	
app.engine("handlebars", hbs.engine);
app.set('view engine', 'handlebars');
app.set('meta', meta);
app.set("article", article);
app.set("posts", posts);


app.use('*/static', express.static('public'));
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}!`));

