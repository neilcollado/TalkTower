const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;

const ChatRoomSchema = new Schema({
  roomName: {
    type: String,
    require: true
  },
  members: [{
    type: ObjectID,
    ref: "user",
    require: true
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

const ChatRoomModel = mongoose.model("chatRoom", ChatRoomSchema);
module.exports = ChatRoomModel;