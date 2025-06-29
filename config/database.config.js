const mongoose = require("mongoose");
const dotenv = require("dotenv");
// dotenv.config();
const isProduction = process.env.NODE_ENV === "production";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: "./.env.prod" });
} else {
  dotenv.config({ path: "./.env" });
}
// console.log(process.env);

mongoose
  .connect(process.env.DB_URL, {
    autoCreate: true,
    autoIndex: false,
    serverSelectionTimeoutMS: 50000, // Set server selection timeout to 50 seconds
    socketTimeoutMS: 45000, // Set socket timeout to 45 seconds
    retryWrites: true,
    w: "majority",
  })
  .then((req) => {
    console.log("Database Connected Succussfully");
  })
  .catch((error) => {
    console.log("DAtabase connected Failed", error);
  });
