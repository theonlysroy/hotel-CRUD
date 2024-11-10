import { model, Schema } from "mongoose";
import { requiredFieldMessage } from "../utils/helpers";

const roomTypeSchema = new Schema({
  bedroomCount: {
    type: Number,
    required: [true, requiredFieldMessage("bedroomCount")],
    default: 1,
  },
  isAirconditioned: { type: Boolean, default: false },
  hasTv: { type: Boolean, default: true },
  hasBathtub: { type: Boolean, default: false },
  hasBalcony: { type: Boolean, default: false },
});

const RoomType = model("roomType", roomTypeSchema);
export default RoomType;
