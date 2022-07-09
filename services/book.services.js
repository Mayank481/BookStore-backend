const mongoose = require("mongoose");
const user = require("../model/user.model");
const bookmodel = require("../model/book.model");

module.exports.allbook = async () => {
  const data = await bookmodel.find().populate({
    path: "Author",
  });
  return data;
};

module.exports.postbook = (bookdata) => {
  const userid = mongoose.Types.ObjectId(bookdata.userid);
  const bookinfo = {
    Title: bookdata.info.booktittle,
    PRICE: bookdata.info.PRICE,
    PUBLISHEDON: bookdata.info.nop,
    Author: userid,
    Status: "Pending",
    View: "Public",
  };
  try {
    bookmodel(bookinfo).save();
  } catch (error) {}
};

module.exports.approvebookdata = async (bookdata) => {
  const userid = mongoose.Types.ObjectId(bookdata.uid);
  try {
    const updatedata = await bookmodel.findById(userid);
    updatedata.Status = "approve";
    updatedata.save();
  } catch (error) {}
};
module.exports.getrecord = async (bookdata) => {
  const userid = mongoose.Types.ObjectId(bookdata.uid);
  try {
    const data = await bookmodel.find({ Author: userid });
    return data;
  } catch (error) {
    return error;
  }
};

module.exports.deleterecord = async (bookdata) => {  
  const userid = mongoose.Types.ObjectId(bookdata.Author);
  try {
    const data = await bookmodel.deleteOne({Author: userid,Title: bookdata.Title,PRICE : bookdata.PRICE})
  } catch (error) {
    return error;
  }
}

module.exports.getprivacy = async (bookdata) => {
  const userid = mongoose.Types.ObjectId(bookdata.data);
  try {
    const data = await bookmodel.findById(userid);
    data.View = bookdata.privacy;
    data.save();
  } catch (error) {}
};
