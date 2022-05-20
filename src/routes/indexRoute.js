const newsRouter = require('./newsRoute');
const meRouter = require('./meRoute');
const coursesRouter = require('./coursesRoute');
const siteRouter = require('./siteRoute');

function route(app) {
   app.use('/news', newsRouter);
   app.use('/me', meRouter);
   app.use('/courses', coursesRouter);
   app.use('/', siteRouter);
}
module.exports = route;