export interface FlickerFeed {
    title: string;
    link: string;
    media: {
        m: string;
    };
    date_taken: string;
    description: string;
    published: string;
    author: string;
    author_id: string;
    tags: string;
}

export interface FlickerFeedResponse {
    title: string;
    link: string;
    description: string;
    modified: string;
    generator: string;
    items: FlickerFeed[];
}
