import { Request } from "express";

function tryCatch(
  controllerFunction: (req: Request) => Promise<string>
): (req: Request) => Promise<void> {
  return async (req: Request) => {
    try {
      await controllerFunction(req);
    } catch (error) {
      console.error("An Error Occured", error);
    }
  };
}

export { tryCatch };
