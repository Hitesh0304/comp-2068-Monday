const express = require('express');
const app = express();

//Import our routes
const pageRoutes = require('./routes/pages');
const blogRoutes = require('./routes/blogs');

//Register our page routes
app.use('/', pageRoutes);
app.use('/blogs', blogRoutes);

// Exporting the changes
module.exports = app;