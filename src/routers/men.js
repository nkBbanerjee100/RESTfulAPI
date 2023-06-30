// for routing purpose
const express = require("express")
const app = express()
const router = new express.Router();
const MenCollection = require("../models/mens")

router.post("/mens", async (req, res) => {
    try {
        // create a new collection using new keyword
        const posting = new MenCollection(req.body)
        // connect the collection with MongoDB using save() method
        const responceOnPosting = await posting.save();
        // using send Promise should be returned
        res.status(201).send(responceOnPosting)
    } catch (err) {
        res.status(404).send(`error ${err}`)
    }
})
router.get("/mens", async (req, res) => {
    try {
        const menList = await MenCollection.find({}).sort({ "ranking": 1 });
        res.status(201).send(menList)
    } catch (err) {
        res.status(404).send(`error ${err}`)
    }
})
app.get("/mens/:name", async (req, res) => {
    try {
        const name = req.params.name
        const menList = await MenCollection.find({ name });
        res.status(201).send(menList)
    } catch (err) {
        res.status(404).send(`error ${err}`)
    }
})
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const newMenCollection = await MenCollection.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(newMenCollection)
    } catch (error) {
        // 500 -> server side error
        res.status(500).send("error occured")
    }
})
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const newMenCollection = await MenCollection.findByIdAndDelete(_id)
        res.status(201).send(newMenCollection)
    } catch (error) {
        // 500 -> server side error
        res.status(500).send("error occured")
    }
})
module.exports = router