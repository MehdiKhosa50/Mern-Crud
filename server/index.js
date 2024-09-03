const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/Users")

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://mehdikhosa50:umZuzhcs2rDCn5xz@mern-crud.79xgx.mongodb.net/?retryWrites=true&w=majority&appName=Mern-Crud")

app.post("/createUsers", (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.get("/users", (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById(id)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate(id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("Server Started")
})