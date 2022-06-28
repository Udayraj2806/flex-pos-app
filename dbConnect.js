const mongoose = require("mongoose");

const URL = "mongodb+srv://Uday:urraj@cluster0.hqxku.mongodb.net/flexpos";

mongoose.connect(URL);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connectionObj.on("error", () => {
  console.log("Mongo DB Connection Failed");
});
