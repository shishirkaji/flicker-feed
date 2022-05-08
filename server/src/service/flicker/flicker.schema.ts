import Joi from "joi";

import { FlickerFeedResponse } from "./flicker.types";

const commonStringSchema = Joi.string().required();

const flickerResponseSchema = Joi.object<FlickerFeedResponse>({
    title: Joi.string(),
    link: commonStringSchema,
    description: Joi.string().allow(""),
    modified: Joi.string(),
    generator: Joi.string(),
    items: Joi.array()
        .items(
            Joi.object({
                title: commonStringSchema.allow(""),
                link: Joi.string(),
                media: Joi.object({
                    m: commonStringSchema,
                }),
                date_taken: commonStringSchema,
                description: Joi.string().allow(""),
                published: commonStringSchema,
                author: commonStringSchema,
                author_id: commonStringSchema,
                tags: commonStringSchema.allow(""),
            })
        )
        .required(),
});

export default { flickerResponseSchema };
