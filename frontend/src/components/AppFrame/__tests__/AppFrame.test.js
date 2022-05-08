import { cleanup, render, screen } from "@testing-library/react";
import AppFrame from "./../AppFrame";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("AppFrame", () => {
    it("must render without crashing", () => {
        render(<AppFrame />);
        const textElement = screen.getByTestId("AppFrame");
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent("hello world");
    });
    it.skip("must show hello world", () => {});
});
