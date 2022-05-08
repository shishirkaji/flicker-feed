import React from "react";
import Search from "../Search/Search";
import Card from "../Card/Card";
import CardFrame from "../CardFrame/CardFrame";
import "./AppFrame.css";

function App() {
    const onSearchTermChange = (newSearchTerm: string) => {
        console.log(newSearchTerm);
    };

    return (
        <div className="App-frame" data-testid="AppFrame">
            <Search onSearchTermChange={onSearchTermChange} />

            <CardFrame>
                <Card
                    imageUrl="asdfasd"
                    thumbNail="asdfasd"
                    title="Damn daniel title asdfsadfasdfasdf Damn daniel titleasdfasdfasfas Damn daniel titleasdfasdfasfas Damn daniel titleasdfasdfasfas Damn daniel titleasdfasdfasfas "
                    tags={
                        "nobody@flickr.comnobody @flickr.comnobody @flickr.com  nobody@flickr.comnobody @flickr.comnobody @flickr.com  nobody@flickr.comnobody @flickr.comnobody @flickr.com"
                    }
                />
                <Card
                    thumbNail="asdfasd"
                    imageUrl="asdfasd"
                    title="Damn daniel title"
                    tags={"nobody@flickr.comnobody @flickr.comnobody @}"}
                />
                <Card
                    thumbNail="asdfasd"
                    imageUrl="asdfasd"
                    title="Damn daniel title"
                    tags={
                        "nobody@flickr.comnobody @flickr.comnobody @flickr.com  nobody@flickr.comnobody @flickr.comnobody @flickr.com  nobody@flickr.comnobody @flickr.comnobody @flickr.com"
                    }
                />
            </CardFrame>
        </div>
    );
}

export default App;
