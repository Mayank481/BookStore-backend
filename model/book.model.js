const mongooes = require("mongoose");
const { Schema } = require("mongoose");

const userschema = new mongooes.Schema({
  Title: String,
  ISBN: String,
  Pages: String,
  Author: {
    type: Schema.Types.ObjectId,
    ref: "book-store",
  },
  Status: String,
  View: String,
});
module.exports = mongooes.model("books", userschema);
