const express = require('express');
const exphbs  = require('express-handlebars');
const router = require('./router');
const meta = require("./content/meta.json");
const app = express();
const article = require("./content/article.json");
const port = 3000;
const cors = require("cors");

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('meta', meta);
app.set("article", article);
app.use('*/static', express.static('public'));
app.use(cors());

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
