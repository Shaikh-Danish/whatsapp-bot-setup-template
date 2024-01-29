import dotenv from "dotenv";
import { appendFileSync } from "fs";
import "module-alias/register";

dotenv.config({ path: "./.env" });

import connectDB from "./src/db";
import app from "./app";

(async () => {
  addRootPathInEnv();
  connectDB();

  app.on("error", (error) => {
    console.log("Error", error);
  });

  const port: number = Number(process.env.PORT) || 8080;
  app.listen(port, () =>
    console.log(`App now running and listening on port ${port}`)
  );
})();

function addRootPathInEnv(): void {
  if (!process.env.ROOT_PATH) {
    appendFileSync("./.env", `\nROOT_PATH=${__dirname}\n`);
  }
}
