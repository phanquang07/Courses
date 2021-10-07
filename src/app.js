const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { urlencoded, json } = require('express');
const app = express();
const port = 5000;

const route = require('./routes/indexRoute');
const db = require('./config/db/indexConfig');
// Route init
route(app);

// Connect to DB
db.connect();

// Static
app.use(express.static(path.join(__dirname, 'public')));

app.use(urlencoded({
   extended: true
}));
app.use(json());

// HTTP loger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
   extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
})