const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const entityRoute = require('./routes/entity.routes.js');

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/entities", entityRoute);

app.get('/', (req, res) => {
    res.send('Success!!!!!!');
});

mongoose.connect('mongodb://127.0.0.1:27017/pagination')
    .then(() => console.log('Connected to database'))
    .catch((e) => console.log(e));

app.listen(5000, () => console.log("Server Started"));