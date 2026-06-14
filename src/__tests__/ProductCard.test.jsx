import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import ProductCard from "../components/ProductCard";

const mockProduct = {
    id: 1,
    name: "Berserk Deluxe Vol. 1",
    anime: "Berserk",
    category: "Manga",
    price: 49.99,
    image: "https://example.com/image.jpg",
    likes: 0,
};

test("renders product information", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(/Berserk Deluxe Vol. 1/i)).toBeInTheDocument();
    expect(screen.getByText("Berserk")).toBeInTheDocument();
    expect(screen.getByText(/Manga/i)).toBeInTheDocument();
    expect(screen.getByText("$49.99")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Edit Price/i })).toBeInTheDocument();
});