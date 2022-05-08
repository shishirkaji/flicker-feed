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
                    imageUrl="https://live.staticflickr.com//65535//52056886712_6aa6c1455c_m.jpg"
                    thumbNail="https://live.staticflickr.com//65535//52056886712_6aa6c1455c_m.jpg"
                    title="Damn daniel title asdfsadfasdfasdf Damn daniel titleasdfasdfasfas Damn daniel titleasdfasdfasfas Damn daniel titleasdfasdfasfas Damn daniel titleasdfasdfasfas "
                    tags={
                        "nobody@flickr.comnobody @flickr.comnobody @flickr.com  nobody@flickr.comnobody @flickr.comnobody @flickr.com  nobody@flickr.comnobody @flickr.comnobody @flickr.com"
                    }
                />
                <Card
                    thumbNail="https://live.staticflickr.com//65535//52056886712_6aa6c1455c_m.jpg"
                    imageUrl="asdfasd"
                    title="Damn daniel title"
                    tags={"nobody@flickr.comnobody @flickr.comnobody @}"}
                />
                <Card
                    thumbNail="https://live.staticflickr.com//65535//52056886712_6aa6c1455c_m.jpg"
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
