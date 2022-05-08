import axios from "axios";
import React, { useState, useEffect } from "react";

import "./app.css";
import Search from "../Search/Search";
import Card from "../Card/Card";
import CardFrame from "../CardFrame/CardFrame";
import constants from "./../../common/constants";
import Spinner from "../Spinner/Spinner";
import { FlickerFeed } from "../common";

const { BASE_URL_DEV, FLICKER_ROUTE } = constants;
function App() {
    const onSearchTermChange = (newSearchTerm: string) => {
        console.log(newSearchTerm);
    };

    const [feeds, setFeeds] = useState<FlickerFeed[]>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${BASE_URL_DEV}${FLICKER_ROUTE}`);

            setFeeds(data);
            setIsLoading(false);
        })();
    }, []);

    return (
        <>
            <div className="App-frame" data-testid="AppFrame">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <Search onSearchTermChange={onSearchTermChange} />

                        <CardFrame>
                            {feeds &&
                                feeds.map((feed) => {
                                    return (
                                        <Card
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
