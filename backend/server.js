import express from "express";

const server = express();
const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.send("Hello programmers!!");
})

server.listen(port, () => {
    console.log(`server listening to the port ${port}`)
})