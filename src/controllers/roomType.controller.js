import ApiResponse from "../utils/ApiResponse";
import { messages } from "../utils/messages";

const createRoomType = async (req, res, next) => {
  try {
    console.log(req.body);
    return res.code(201).send(new ApiResponse(201, messages.success.create));
  } catch (error) {
    next(error);
  }
};

export { createRoomType };
