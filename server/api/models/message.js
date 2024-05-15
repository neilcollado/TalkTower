const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;

const MessageSchema = new Schema({
  sender: {
    type: ObjectID,
    ref: "user",
    require: true
  },
  receiver: {
    type: ObjectID,
    ref: "user",
    require: true
  },
  chatRoomId: {
    type: ObjectID,
    ref: "chatRoom",
    require: true
  },
  content: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["pending", "sent", "failed"],
    default: "pending",
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

const MessageModel = mongoose.model("message", MessageSchema);
module.exports = MessageModel;