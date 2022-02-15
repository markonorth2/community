const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db = require('./configs/db.config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const businessesRouter = require('./routes/businesses');
const reportsRouter = require('./routes/reports');
const categoriesRouter = require('./routes/categories');
const servicesRouter = require('./routes/services');
const ratingsRouter = require('./routes/ratings');
const reward_pointsRouter = require('./routes/reward_points');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter(db));
app.use('/businesses', businessesRouter(db));
app.use('/reports', reportsRouter(db));
app.use('/categories', categoriesRouter(db));
app.use('/services', servicesRouter(db));
app.use('/ratings', ratingsRouter(db));
app.use('/reward_points', reward_pointsRouter(db));

module.exports = app;
