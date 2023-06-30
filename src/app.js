const express = require("express")
const app = express()
require("./db/conn/connection")
const Router = require("./routers/men")
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(Router)
app.listen(port, () => {
    console.log(`connection established at port number ${port}`);
})