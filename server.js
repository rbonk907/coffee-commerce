const path = require("path");
const express = require("express");
const gatsbyExpress = require("gatsby-plugin-express");
const app = express();

// serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(gatsbyExpress("config/gatsby-express.json", {
    publicDir: 'public/',

    redirectSlashes: true,
}));

app.listen(3000, function() {
    console.log('App started on port 3000');
});