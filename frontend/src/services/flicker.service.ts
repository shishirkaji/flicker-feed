import axios from "axios";

import constants from "../common/constants";

const { BASE_URL_DEV, FLICKER_ROUTE } = constants;

const getFlickerFeeds = async (searchTerm?: string) => {
    const { data } = await axios.get(
        `${BASE_URL_DEV}${FLICKER_ROUTE}${
            searchTerm ? `?searchTerm=${searchTerm}` : ""
        }`
    );
    return data;
};

const flickerService = { getFlickerFeeds };

export default flickerService;
