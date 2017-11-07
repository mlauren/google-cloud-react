'use strict';

const express = require('express');

const app = express();

// [START index]
// Say hello!
app.get('/', (req, res) => {
  res.status(200).sendFile('/index.html', { root: __dirname });
});
// [END index]

// [START use build folder]
app.use("/build", express.static(__dirname + '/build'));
// [END use build folder]

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
