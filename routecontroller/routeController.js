const path = require('path')


const home = (req, res) => {
    res.status(201).sendFile(path.resolve(__dirname, '../root/home.html'))
}

const queryData = (req, res) => {
    const name = req.body.firstName;
    console.log(name)
    res.send("done")
}

module.exports = { home, queryData }