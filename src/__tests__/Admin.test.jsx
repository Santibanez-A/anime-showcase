import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Admin from "../pages/Admin";

test("renders the admin form", () => {
    render(<Admin />);

    expect(screen.getByPlaceholderText(/Product Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Product Anime Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Product Category/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Product Price/i)).toBeInTheDocument();
    expect(
        screen.getByRole("button", { name: /Add Product/i })
    ).toBeInTheDocument();
});