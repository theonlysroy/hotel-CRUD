import { createRoomType } from "../controllers/roomType.controller";
import app from "../app";

const roomTypeRoutes = (app) => {
  app.get("/room-type", (req, rep) => {
    rep.send("get room type route");
  });
  app.post("/room-type", createRoomType);
};
export default roomTypeRoutes;
