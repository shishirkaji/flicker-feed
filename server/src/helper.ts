import { FlickerFeedResponse } from "./service/flicker/flicker.types";

const evaluateFlickerJsonP = (data: string) => {
    try {
        let dataToRespond: FlickerFeedResponse | [] = [];

        const dynamicFunction = new Function("jsonFlickrFeed", data);

        dynamicFunction(function (json: FlickerFeedResponse) {
            dataToRespond = json;
        });

        return dataToRespond;
    } catch (error) {
        console.log(error);
    }
};

export default { evaluateFlickerJsonP };
