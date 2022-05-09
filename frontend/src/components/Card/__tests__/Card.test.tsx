import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Card from "../card";

describe("Card", () => {
    let cardElement: HTMLElement;
    const cardProps = {
        tags: "some random tags",
        title: "some title",
        imageUrl: "image urls",
        thumbNail: "thumbnail url",
        author: "shishir",
        date: new Date().toISOString(),
    };

    it("must render without crashing", () => {
        render(
            <Router>
                <Card
                    author={cardProps.author}
                    date={cardProps.date}
                    tags={cardProps.tags}
                    title={cardProps.title}
                    imageUrl={cardProps.imageUrl}
                    thumbNail={cardProps.thumbNail}
                />
            </Router>
        );

        cardElement = screen.getByTestId("card-test");

        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveAttribute("class", "card");
    });

    it("must have have required children with correct attribute or content", () => {
        render(
            <Router>
                <Card
                    author={cardProps.author}
                    date={cardProps.date}
                    tags={cardProps.tags}
                    title={cardProps.title}
                    imageUrl={cardProps.imageUrl}
                    thumbNail={cardProps.thumbNail}
                />
            </Router>
        );

        const image = screen.getByRole("img");
        const author = screen.getByRole("heading");
        const button = screen.getByRole("button");
        const tags = screen.getByTestId("tags");

        expect(image.getAttribute("src")).toEqual(cardProps.thumbNail);
        expect(author).toHaveTextContent(cardProps.author);
        expect(tags).toHaveTextContent(cardProps.tags);
        expect(button).toHaveAttribute("class", "card_btn");
    });

    it("must redirect to /image/?url=image_url when a button is clicked", () => {
        render(
            <Router>
                <Card
                    author={cardProps.author}
                    date={cardProps.date}
                    tags={cardProps.tags}
                    title={cardProps.title}
                    imageUrl={cardProps.imageUrl}
                    thumbNail={cardProps.thumbNail}
                />
            </Router>
        );

        const button = screen.getByRole("button");
        userEvent.click(button);

        expect(global.window.location.pathname).toEqual(`/image`);
        expect(global.window.location.search).toEqual(
            `?imageUrl=${encodeURI(cardProps.imageUrl)}`
        );
    });
});
