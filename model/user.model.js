const mongooes = require("mongoose");
const { Schema } = require("mongoose");

const userschema = new mongooes.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Password: String,
  PhoneNumber: String,
});
module.exports = mongooes.model("book-store", userschema);
