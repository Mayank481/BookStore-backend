const mongooes = require("mongoose");
const userdata = require("../model/user.model");

module.exports.alluser = (data) => {
  const info = {
    FirstName: data.userFirstName,
    LastName: data.userLastName,
    Email: data.userEmail,
    Password: data.userPassword,
    PhoneNumber: data.userPhoneNumber,
  };
  try {
    userdata(info).save();
  } catch (error) {
    console.log(error);
  }
};

module.exports.logUser = async (data) => {
  const info = {
    Email: data.userEmail,
    Password: data.userPassword,
  };
  try {
    const loginfo = await userdata.findOne({ Email: info.Email });
    return loginfo;
  } catch (error) {
    console.log(error);
  }
};
