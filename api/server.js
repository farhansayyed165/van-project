// import all the stuff
const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler")
const validateToken = require("./middleware/validateToken")
const { pool } = require("./queries");
const cookieParser = require('cookie-parser')
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const {getImageUrl} = require("./config/awsConfig")

const cors = require("cors");

// app.set('Access-Control-Expose-Headers', 'field')

app.use(cookieParser())

app.use(express.json())

const corsConfig = {
    credentials: true,
    origin: true,
};

app.use(cors(corsConfig));

app.use(errorHandler);

app.use(express.urlencoded({
    extended: true,
}));

app.get("/", (req, res) => {
    res.json({ message: "Node js cool" });
});

app.get("/file",upload.single("image"), async (req, res)=>{
    console.log(req.body)
    console.log(req.file)
    res.send(req.body)
})

app.use("/api/", require("./routes/vansRoute"))

app.get("/checkToken", validateToken, (req,res)=>{
    // const user = req.user
    // console.log(user)
    res.status(200).json(true)
})

app.use("/api/", require("./routes/userRoute"))

app.get("/api/refresh", require("./controller/refreshTokenController"))

app.listen(3000, () => {
    console.log("Listening to port 3000");
})