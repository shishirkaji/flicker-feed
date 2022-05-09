import { FlickerFeed, FlickerFeedResponse } from "./flicker.types";

const sanitizeFeeds = (data: FlickerFeedResponse) => {
    const getBigImageUrl = (thumbnailUrl: FlickerFeed["media"]["m"]) => {
        const [firstString, secondString] = thumbnailUrl.split("_m");

        return firstString + "_b.jpg";
    };

    const getArrayOfTags = (tags: FlickerFeed["tags"]) => {
        const transformedTagsArray = tags.split(" ");
        const uppercaseTagsArray = transformedTagsArray.map((tag) => {
            return tag.toLocaleUpperCase();
        });
        return uppercaseTagsArray.length === 1 && uppercaseTagsArray[0] === ""
            ? []
            : uppercaseTagsArray;
    };
    return data.items.map((item) => {
        return {
            title: item.title,
            author: item.author,
            thumbnailUrl: item.media.m,
            tags: getArrayOfTags(item.tags),
            imageUrl: getBigImageUrl(item.media.m),
            date: item.date_taken,
        };
    });
};

export default { sanitizeFeeds };
