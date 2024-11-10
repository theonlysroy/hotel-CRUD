import { model, Schema } from "mongoose";
import { requiredFieldMessage } from "../utils/helpers";

const roomSchema = new Schema(
  {
    roomNumber: {
      type: String,
      required: [true, requiredFieldMessage("roomNumber")],
    },
    roomTypeId: {
      type: Schema.Types.ObjectId,
      ref: "RoomType",
      required: [true, requiredFieldMessage("Room Type")],
    },
    isOccupied: {
      type: Boolean,
      required: [true, requiredFieldMessage("isOccupied")],
      default: false,
    },
    isUnderMaintenance: {
      type: Boolean,
      required: [true, requiredFieldMessage("isUnderMaintenance")],
      default: false,
    },
    currentGuestId: {
      type: Schema.Types.ObjectId,
      ref: "Guest",
      default: null,
    },
  },
  { timestamps: true },
);

const Room = model("room", roomSchema);
export default Room;
