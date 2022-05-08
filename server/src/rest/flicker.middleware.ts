import { NextFunction, Request, Response } from "express";

const queryStringValidator = (
    req: Request<any, any, { searchTerm: string }, { searchTerm: string }, any>,
    res: Response,
    next: NextFunction
) => {
    const {
        query: { searchTerm },
    } = req;

    console.log(searchTerm);

    if (!searchTerm) {
        next();
    }

    if (searchTerm.length > 20) {
        return res.status(400).json({
            msg: "The search term may not be more than 20 letter",
        });
    }
};
