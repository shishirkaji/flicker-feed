import React, { useState, useEffect } from "react";

import "./app.css";
import Search from "../Search/Search";
import Card from "../Card/Card";
import CardFrame from "../CardFrame/CardFrame";
import Spinner from "../Spinner/Spinner";
import { FlickerFeed } from "../common";
import flickerService from "./../../services/flicker.service";

function App() {
    const loadFlickerFeed = async (searchTerm?: string) => {
        const data = await flickerService.getFlickerFeeds(searchTerm);
        setFeeds(data);
        setIsLoading(false);
    };

    const onSearchTermChange = async (newSearchTerm: string) => {
        setIsLoading(true);
        setSearch(newSearchTerm);
        await loadFlickerFeed(newSearchTerm);
    };

    const [feeds, setFeeds] = useState<FlickerFeed[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState<string>();

    useEffect(() => {
        (async () => {
            await loadFlickerFeed();
        })();
    }, []);

    return (
        <>
            <div className="App-frame" data-testid="AppFrame">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <Search
                            onSearchTermChange={onSearchTermChange}
                            search={search}
                        />

                        <CardFrame>
                            {feeds &&
                                feeds.map((feed, index) => {
                                    return (
                                        <Card
                                            key={
                                                feed.author +
                                                feed.imageUrl +
                                                index
                                            }
                                            imageUrl={feed.imageUrl}
                                            thumbNail={feed.thumbnailUrl}
                                            title={feed.title}
                                            tags={feed.tags.join(" ")}
                                        />
                                    );
                                })}
                        </CardFrame>
                    </>
                )}
            </div>
        </>
    );
}

export default App;
