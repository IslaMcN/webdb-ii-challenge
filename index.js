const server = require('./server');
const port = process.env.PORT || 5000;

server.listn(port, () => {
    console.log(`Server is on port ${port}`)
})