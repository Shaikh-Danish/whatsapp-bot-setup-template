import { Request, Response, NextFunction } from "express";

export const tryCatch =
  (controllerFunction: () => Promise<string>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    await controllerFunction().catch(next);
  };
