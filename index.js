import app from "./src/app";
import connectDb from "./src/db";

const port = 8001;
connectDb()
  .then(() => {
    app.listen({ port }, () => {
      console.log(`⚙️ Server running from http://127.0.0.1:${port}`);
    });
  })
  .catch((error) => {
    console.log("Server failed to start !! \n", error.message);
    process.exit(1);
  });
