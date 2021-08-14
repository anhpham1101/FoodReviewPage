const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server is listening on port ${server.address().port}`)
});

const userRouters = require('./userRouter');
app.use('/', userRouters);