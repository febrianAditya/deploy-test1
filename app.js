const express = require('express');
const app = express();
const { User } = require('./models');
const port = 3000

app.use(express.json());

app.get("/welcome", (req, res) => {
    res.status(200).json("Halo Febrian")
})

app.get("/user", async (req, res) => {
    try {
        const dataUser = await User.findAll()
        res.status(200).json(dataUser)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

app.post("/resgister", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.create({ username, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

app.listen(port, () => {
    console.log("Running di port " + port);
    
})