import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Card from "../Card";

describe("Card", () => {
    let cardElement: HTMLElement;
    const cardProps = {
        tags: "some random tags",
        title: "some title",
        imageUrl: "image urls",
        thumbNail: "thumbnail url",
    };

    it("must render without crashing", () => {
        render(
            <Card
                tags={cardProps.tags}
                title={cardProps.title}
                imageUrl={cardProps.imageUrl}
                thumbNail={cardProps.thumbNail}
            />
        );

        cardElement = screen.getByTestId("card-test");

        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveAttribute("class", "card");
    });

    it("must have have required children with correct attribute or content", () => {
        render(
            <Card
                tags={cardProps.tags}
                title={cardProps.title}
                imageUrl={cardProps.imageUrl}
                thumbNail={cardProps.thumbNail}
            />
        );

        const image = screen.getByRole("img");
        const title = screen.getByRole("heading");
        const button = screen.getByRole("button");
        const tags = screen.getByTestId("tags");

        expect(image.getAttribute("src")).toEqual(cardProps.thumbNail);
        expect(title).toHaveTextContent(cardProps.title);
        expect(tags).toHaveTextContent(cardProps.tags);
        expect(button).toHaveAttribute("class", "card_btn");
    });

    it("must redirect to /image/?url=image_url when a button is clicked", () => {
        render(
            <Card
                tags={cardProps.tags}
                title={cardProps.title}
                imageUrl={cardProps.imageUrl}
                thumbNail={cardProps.thumbNail}
            />
        );

        const button = screen.getByRole("button");
        userEvent.click(button);

        expect(global.window.location.pathname).toEqual(`/image`);
        expect(global.window.location.search).toEqual(
            `?url=${encodeURI(cardProps.imageUrl)}`
        );
    });
});
