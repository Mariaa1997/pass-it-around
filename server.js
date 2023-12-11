const express = require('express');
const app = express();
const port = 3002;
const jsxViewEngine = require('jsx-view-engine');
// const Index = require('./views/Index');

//npm install react react-dom jsx-view-engine --save
//import the engine and app.set
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

//middleware
app.use((req, res, next) => {
    console.log("Middleware: I run for all routes");
    next();
})

//near the top, around the app.use() calls
app.use(express.urlencoded({extended:false}));

//These are my Routes
//I - INDEX - displays a list of elements
app.get('/', (req, res) => {
    res.render('Index');
});
//S - SHOW display a specific element
app.get("/:numberOfBottles" , (req, res) => {
    res.render('Show', {
        counts: req.params.numberOfBottles
    });
})

app.listen(port, () => {
    console.log('listening on Port', port);
})