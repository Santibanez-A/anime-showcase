import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/vitest";

test("renders the navbar links", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Shop/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Anime/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Admin/i })).toBeInTheDocument();
});