const book = require("../services/book.services");

module.exports.getAllBooks = async (req, res) => {
  const data = await book.allbook();
  res.send(data);
};

module.exports.publishbook = async (req, res) => {
  const data = await book.postbook(req.body);
  res.send(data);
};

module.exports.approvebook = async (req, res) => {
  const data = await book.approvebookdata(req.body);
  res.send(data);
};

module.exports.singlebookrecord = async (req, res) => {
  const data = await book.getrecord(req.body);
  res.send(data);
};

module.exports.deletebook = async (req, res) => {  
  const data = await book.deleterecord(req.body);
  res.send(data);
}

module.exports.privacy = async (req, res) => {
  const data = await book.getprivacy(req.body);
  res.send(data);
};
