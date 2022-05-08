export interface IComponentProps {
    "data-testid": string;
    className?: string;
}

export interface FlickerFeed {
    author: string;
    date: string;
    imageUrl: string;
    tags: [] | string[];
    thumbnailUrl: string;
    title: string;
}
