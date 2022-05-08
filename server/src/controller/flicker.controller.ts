import { Request, Response } from "express";
import flickerService from "./../service/flicker/flicker.service";

const flickerController = {
    getFlickerFeeds: async (req: Request, res: Response) => {
        const response = await flickerService.getFlickers();

        return res.status(200).json(response);
    },
};

export default flickerController;
