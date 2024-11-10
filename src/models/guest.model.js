import { model, Schema } from "mongoose";
import { requiredFieldMessage } from "../utils/helpers";

const guestSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, requiredFieldMessage("firstName")],
    },
    lastName: {
      type: String,
      required: [true, requiredFieldMessage("lastName")],
    },
    email: {
      type: String,
      required: [true, requiredFieldMessage("email")],
    },
    phoneNumber: {
      type: String,
      required: [true, requiredFieldMessage("phoneNumber")],
    },
    address: {
      type: String,
      required: [true, requiredFieldMessage("address")],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Guest = model("guest", guestSchema);
export default Guest;
