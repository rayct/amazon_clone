// IMPORTS FROM PACKAGES
const express = require('express');

// IMPORTS FROM OTHER FILES
const authRouter = require('./routes/auth');

// INIT
const PORT = 3000;
const app = express();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`connected at port ${PORT}`);
});

// CREATING AN API
// GET, PUT, POST, DELETE, UPDATE -> *CRUD = CREATE, READ, UPDATE, DELETE*
// http://<youripadress/hello-ray>
// app.get('/', (req, res) => {
//   res.json({ name: 'hello ray' });
// });
