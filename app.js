// Import required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import route handlers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Initialize Express application
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware setup
app.use(logger('dev')); // Logger middleware
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookie headers
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Define route handlers
app.use('/', indexRouter); // Handle requests for the root URL
app.use('/users', usersRouter); // Handle requests for the '/users' URL path

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, providing error details in development mode
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error'); // Render the 'error' view
});

module.exports = app; // Export the Express application
