import dotenv from "dotenv";
import { appendFileSync } from "fs";

dotenv.config({ path: "./.env" });

import connectDB from "./db"
import app from "./app";

(async () => {
  addRootPathInEnv();
  connectDB()

    app.on("error", (error) => {
      console.log("Error", error)
    })

    const port: number = process.env.PORT || 8080;
    app.listen(port, () => console.log(`App now running and listening on port ${port}`));
})();

function addRootPathInEnv(): void {
  if (!process.env.ROOT_PATH) {
    appendFileSync(
      "./.env",
      `\nROOT_PATH=${path.join(path.dirname(__dirname), path.basename(__dirname))}\n`
    );
  }
}
