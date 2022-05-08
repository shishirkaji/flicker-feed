import { render, screen } from "@testing-library/react";
import AppFrame from "./../AppFrame";
import "@testing-library/jest-dom";

describe.skip("AppFrame", () => {
    it("must render without crashing", () => {
        render(<AppFrame />);
        const textElement = screen.getByTestId("AppFrame");
        expect(textElement).toBeInTheDocument();
    });
});
