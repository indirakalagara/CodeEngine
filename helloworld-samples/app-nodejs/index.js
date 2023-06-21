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
	//res.send("hello world!")
    const sevOneData={
        "sevOneData":[ 
          {
              "Indicator": "CarbonOutput",
              "Timestamp": "1682958004000",
              "dataCenter": "MSPWG-BCN-CORE-1",
              "deviceId": "56509",
              "emissionValue": "3.30083333333333",
              "location": "Spain"
      },
      {
              "Indicator": "CarbonOutput",
              "Timestamp": "1682958004000",
              "dataCenter": "MSPWG-BCN-EDGE-1",
              "deviceId": "56507",
              "emissionValue": "3.32025",
              "location": "Spain"
              
      },
          {
              "Indicator": "CarbonOutput",
              "Timestamp": "1682958004000",
              "dataCenter": "MSPWG-DNK-EDGE-1",
              "deviceId": "56511",
              "emissionValue": "2.71833333333333",
              "location": "Denmark"
      },
      
      {
              "Indicator": "CarbonOutput",
              "Timestamp": "1682958004000",
              "dataCenter": "MSPWG-LON-CORE-1",
              "deviceId": "56505",
              "emissionValue": "3.78625",
              "location": "London"
      },
      {
              "Indicator": "CarbonOutput",
              "Timestamp": "1682958004000",
              "dataCenter": "MSPWG-LON-EDGE-1",
              "deviceId": "56503",
              "emissionValue": "3.78625",
              "location": "London",
              "value": "3.78625"
      }
        ]
      }
      
    res.json(sevOneData);
    res.end();
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
