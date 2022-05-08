import { Router } from "express";

import flickerController from "../controller/flicker.controller";

const flickerRoute = Router();

flickerRoute.get("/", flickerController.getFlickerFeeds);

export default flickerRoute;
