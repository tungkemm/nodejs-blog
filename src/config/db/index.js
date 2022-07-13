import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Test');
    console.log("thanh cong");
  } catch (error) {
    console.log("Loi", error);
  }
};

export default {connect};
