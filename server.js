require('zone.js/dist/zone-node');
require('reflect-metadata');
const express = require('express');
const { enableProdMode } = require('@angular/core');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const { AppServerModuleNgFactory } = require(`./dist-server/main.bundle`);

enableProdMode();

function angularRouter(req, res) {
    res.render('index', { req, res });
}
const app = express();
const port = 3000;

/* Root route before static files, or it will serve a static index.html, without pre-rendering */
app.get('/', angularRouter)

// set the engine
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', 'dist');

// to serve our static files.
app.use(express.static(`${__dirname}/dist`));


// direct all routes to index.html
app.get('*', angularRouter);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});