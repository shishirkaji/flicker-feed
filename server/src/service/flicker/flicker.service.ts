import axios from "axios";
import constants from "./../../constants";
import helper from "./../../helper";
import flickerHelper from "./flicker.helper";
import flickerSchemas from "./flicker.schema";
import { FlickerFeedResponse } from "./flicker.types";

const { evaluateFlickerJsonP } = helper;
const { sanitizeFeeds } = flickerHelper;
const { FLICKER_FEED_URL } = constants;

const flickerService = {
    getFlickers: async (searchTerm?: string) => {
        const { data } = await axios.get(
            `${FLICKER_FEED_URL}${searchTerm ? `&tags=${searchTerm}` : ""}`
        );

        const jsonResponse = evaluateFlickerJsonP(data);
        let validatedData: FlickerFeedResponse;
        try {
            validatedData =
                await flickerSchemas.flickerResponseSchema.validateAsync(
                    jsonResponse
                );
        } catch (error) {
            console.log(error);

            throw new Error("Invalid data received.");
        }
        if (!validatedData) throw new Error("Invalid data");

        const sanitizedFeeds = sanitizeFeeds(validatedData);

        return sanitizedFeeds;
    },
};

export default flickerService;
