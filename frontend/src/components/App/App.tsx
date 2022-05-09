import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Search from "../search/search";
import Card from "../card/card";
import CardFrame from "../cardFrame/cardFrame";
import Spinner from "../spinner/spinner";
import { FlickerFeed } from "../common";
import flickerService from "../../services/flicker.service";
import useDebounce from "../../customHooks/useDebounce";
import Image from "../image/image";
import { Navigate } from "react-router-dom";
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

    const AppFrame = () => {
        return (
            <>
                {" "}
                <Search
                    onSearchTermChange={onSearchTermChange}
                    search={search}
                />
                {isLoading ? <Spinner /> : showFeeds()}
            </>
        );
    };

    return (
        <>
            <BrowserRouter>
                <div className="App-frame" data-testid="AppFrame">
                    <Routes>
                        <Route path="/" element={<AppFrame />} />
                        <Route path="/image" element={<Image />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
