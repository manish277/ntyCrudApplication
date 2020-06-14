const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");
const userRoutes = require("./app/routes/userRoutes");
const config = require("./app/config/config");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
// app.use(cors())

//Connect to Mongo DB
mongoose
  .connect(config.getAtlasDbString(), { useNewUrlParser: true })
  .then(_ => console.log("Connected to MongoDb")
  )
  .catch(err => console.log(err));
//Configure Routes
app.use(config.API_PATH, userRoutes());


app.listen(
  config.PORT,
  console.log("Server started at - " + config.URL + ":" + config.PORT)
);

