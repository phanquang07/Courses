const newsRouter = require('./newsRoute');
const siteRouter = require('./siteRoute');
const coursesRouter = require('./coursesRoute');

function route(app) {
   app.use('/news', newsRouter);
   app.use('/courses', coursesRouter);
   app.use('/', siteRouter);
}
module.exports = route;