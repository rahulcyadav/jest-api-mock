import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import * as client from "./api";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();
jest.mock("../state/api");

describe("<App />", () => {
  it("calls api to fetch data and renders all todos", async () => {
    render(<App />);

    await waitFor(() => {
      expect(client.fetchData).toHaveBeenCalledTimes(1);
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText("sunt")).toBeInTheDocument();
  });
});
