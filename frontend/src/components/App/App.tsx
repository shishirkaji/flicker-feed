import React, { useState, useEffect } from "react";

import "./app.css";
import Search from "../Search/Search";
import Card from "../Card/Card";
import CardFrame from "../CardFrame/CardFrame";
import Spinner from "../Spinner/Spinner";
import { FlickerFeed } from "../common";
import flickerService from "./../../services/flicker.service";
import useDebounce from "../../customHooks/useDebounce";

function App() {
    const [feeds, setFeeds] = useState<FlickerFeed[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState<string>();
    const debouncedSearchTerm = useDebounce(search || "", 500);

    const showFlickerFeed = async (searchTerm?: string) => {
        const data = await flickerService.getFlickerFeeds(searchTerm);
        setFeeds(data);
        setIsLoading(false);
    };

    const onSearchTermChange = (newSearchTerm: string) => {
        setIsLoading(true);
        setSearch(newSearchTerm);
    };

    useEffect(() => {
        (async () => {
            if (debouncedSearchTerm) {
                await showFlickerFeed(debouncedSearchTerm);
            } else {
                await showFlickerFeed();
            }
        })();
    }, [debouncedSearchTerm]);

    const showFeeds = () => {
        if (!feeds?.length) {
            return <h1>No match found.</h1>;
        }
        return (
            <>
                <CardFrame>
                    {feeds &&
                        feeds.map((feed, index) => {
                            return (
                                <Card
                                    key={feed.author + feed.imageUrl + index}
                                    imageUrl={feed.imageUrl}
                                    author={feed.author}
                                    date={feed.date}
                                    thumbNail={feed.thumbnailUrl}
                                    title={feed.title}
                                    tags={feed.tags.join(", ")}
                                />
                            );
                        })}
                </CardFrame>
            </>
        );
    };
    return (
        <>
            <div className="App-frame" data-testid="AppFrame">
                <Search
                    onSearchTermChange={onSearchTermChange}
                    search={search}
                />
                {isLoading ? <Spinner /> : showFeeds()}
            </div>
        </>
    );
}

export default App;
