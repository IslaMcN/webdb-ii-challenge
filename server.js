const express = require('express');
server.use(express.json())

const userRouter = require('./database/routes/user-router')
server.use('/api/users', userRouter)
module.exports = server;

