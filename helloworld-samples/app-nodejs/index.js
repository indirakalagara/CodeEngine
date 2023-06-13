// require expressjs
const express = require("express")
const app = express()
// define port 8080
PORT = 8080
app.use(express.json())
// use router to bundle all routes to /
const router = express.Router()
app.use("/", router)
// get on root route 
router.get("/", (req,res) => {
	res.send("hello world!")
})

router.post("/echo", (req, res) => {
    // echo the message back to the user
    res.json({ message: req && req.body && req.body.message || "nothing to echo back" });
    res.end();
});

// start server
app.listen(PORT, () => {
	console.log("Server is up and running!!")
})
