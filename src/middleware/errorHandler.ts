import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const errorHandler = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    //TODO: send response/meesage to user

    console.log(err, req, res, next);
}