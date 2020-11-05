const express = require('express');
const path = require('path');
const morgan = require('morgan');
const sass = require('node-sass');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const router = require('./routes');
app.use(express.static(__dirname + '\\public'));

// parse body to object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init

router(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});