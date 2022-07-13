import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Account = new Schema({
  username: String,
  password: Number,
  action: Object,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Account", Account); //Account nghia la connect den file accounts trong mongodb
