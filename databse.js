require("dotenv").config();
const mongooes = require("mongoose");

const connectDatabase = () => {
  mongooes
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Database Connected`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
