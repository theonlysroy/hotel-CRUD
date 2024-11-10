import Fastify from "fastify";
import roomTypeRoutes from "./routes/roomType.route";

const app = Fastify({
  logger: {
    file: "logs/app.log",
  },
});

app.get("/api/v1", (request, reply) => {
  reply.send({ msg: "version 1 API" });
});

app.register(roomTypeRoutes, {
  logLevel: "debug",
  prefix: "/api/v1",
});

export default app;
