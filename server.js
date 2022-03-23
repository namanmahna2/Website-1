const express = require('express');
const path = require('path')
const server = express();

const port = 8080;

const formSubmission = require('./taskRoutes/routes')

// server.use('/api/v1/tasks', formSubmission)
server.use(express.static('./root'))

server.get('', (req, res) => {
    res.sendFile(path.join(__dirname, './root/home.html'))
})
server.listen(port, () => {
    console.log(`You are now connected to port ${port}. Thank You`)
})