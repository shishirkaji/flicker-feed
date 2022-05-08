import { Request, Response } from "express";
import flickerService from "./../service/flicker/flicker.service";

const flickerController = {
    getFlickerFeeds: async (
        req: Request<any, any, any, { searchTerm: string }, any>,
        res: Response
    ) => {
        const { query } = req;

        const response = await flickerService.getFlickers(query.searchTerm);
        return res.status(200).json(response);
    },
};

export default flickerController;
