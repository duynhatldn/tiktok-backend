import express from 'express'
import mongoose from 'mongoose'
import Videos from './model/tiktokVideos.js'
import User from './model/user.js'

import Cors from 'cors'
//A1WPWlcNwdEVutpP
const app = express()
const port = process.env.port || 9000
const connection_url = 'mongodb+srv://admin:A1WPWlcNwdEVutpP@cluster0.gdpcmmb.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())
app.use(Cors())

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.post('/videos', async (req,res) => {
    const dbVideos = req.body;
    const rs = await Videos.create(dbVideos)
    return res.status(201).send(rs)
})

app.get('/videos', async (req,res) => {
    const rs = await Videos.find();
    return res.status(200).send(rs);
})

app.post('/user', async (req,res) => {
    const dbUser = req.body;
    const rs = await User.create(dbUser)
    return res.status(201).send(rs)
})

app.post('/checkUser', async (req,res) => {
    const {username,password} = req.body;
    if(!username || !password) return res.status(400).send("param null")
    const rs = await User.findOne({email:username,password});
    console.log(rs);
    if(!rs) return res.status(200).send('login error')
    return res.status(200).send(rs);
})

app.listen(port, () => console.log(`Listening on localhost: ${port}`))