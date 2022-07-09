// IMPORTS FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose')

// IMPORTS FROM OTHER FILES
const authRouter = require('./routes/auth');

// INIT
const PORT = 3000;
const app = express();
const DB = 'mongodb+srv://ray:xAgxPJg1PTvbv8t4@cluster0.htp6l.mongodb.net/?retryWrites=true&w=majority'

// MIDDLEWARE
app.use(express.json());
app.use(authRouter);

// Connections
mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
})
    .catch((e) => {
        console.log(e);
    }); 

app.listen(PORT, '0.0.0.0', () => {
  console.log(`connected at port ${PORT}`);
});

// CREATING AN API
// GET, PUT, POST, DELETE, UPDATE -> *CRUD = CREATE, READ, UPDATE, DELETE*
// http://<youripadress/hello-ray>
// app.get('/', (req, res) => {
//   res.json({ name: 'hello ray' });
// });
 