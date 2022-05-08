import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Search from "../Search";

describe("Search", () => {
    let searchElement: HTMLElement;
    const onSearchTermChangeMock = jest.fn();

    it("must render without crashing", () => {
        render(<Search onSearchTermChange={() => {}} />);

        searchElement = screen.getByTestId("search");

        expect(searchElement).toBeInTheDocument();
        expect(searchElement).toHaveAttribute("name", "searchTerm");
        expect(searchElement).toHaveAttribute("placeholder", "Search flixer");
    });

    it("must be empty in the beginning", () => {
        expect(searchElement).toHaveValue("");
        expect(searchElement).toHaveAttribute("placeholder", "Search flixer");
    });

    it("must update change the value when new words are typed", () => {
        userEvent.paste(searchElement, "hello world");

        expect(searchElement).toHaveValue("hello world");
    });

    it("must call onSearchTermChange function", () => {
        render(<Search onSearchTermChange={onSearchTermChangeMock} />);

        const newSearchElement = screen.getByTestId("search");
        userEvent.paste(newSearchElement, "hello world");

        expect(onSearchTermChangeMock).toBeCalledTimes(1);
    });
});
