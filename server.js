// DEPENDENCIES
const express = require('express');

// EXPRESS CONFIGURATION
const app = express();

// Sets an initial port. 
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'))

// ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});