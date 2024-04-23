require("dotenv").config();
const server = require("./index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 8000;
const DB = process.env.DATABASE_LOCAL;
//const DB = process.env.DATABASE;
async function connectionit() {
  const conn = await mongoose.connect(DB);
  if (conn) {
    console.log("connected to mongodb database");
  }
}
connectionit();

server.listen(port, () => {
  console.log("server is listening at port number = " + port);
});
