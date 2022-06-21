require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser");
const placement = require("./routes/placement");
const internship = require("./routes/internship");
const authrouter = require("./routes/authroute");
const Comment = require("./model/comment");
const app = express();
const client = require("./routes/client")
const path = require("path");
const { join } = require('path')
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
connectDB();
app.use(express.static("public"));
app.use(cors());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
const publicFolder = join(__dirname, 'client', 'build')

app.use(express.static(publicFolder))

app.use("/api", internship);
app.use("/api", placement);
app.use("/api", authrouter);
app.get("/*",(req, res) => {
  console.log("helo")
  res.sendFile(path.join(__dirname, "client/build/index.html"));
})
// //cookies
app.get("/api/set-cookies", (req, res) => {
  // res.setHeader('set-cookie','newAdmin=true');
  res.cookie("newAdmin", false);
  res.cookie("isAdmin", true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
  res.send("you got the cookies");
});
app.get("/api/read-cookies", (req, res) => {
  res.json(res.cookie);
});


app.listen(process.env.PORT || 3000, () =>
  console.log(`server started at ${process.env.PORT || 3000}`)
);
