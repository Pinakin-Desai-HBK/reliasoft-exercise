import { render, screen } from "@testing-library/react";
import AlertDetails from "./AlertDetails";
import { AlertDetailsProps } from "../../types/types";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

const mockOnClose = vi.fn();

const alertDetails: AlertDetailsProps = {
  onClose: mockOnClose,
  alertDetails: {
    id: "1",
    headline: "Test Alert",
    description: "This is a test alert description.",
    effective: new Date().toISOString(),
    effectiveLocale: new Date().toISOString(),
    expires: new Date().toISOString(),
    expiresLocale: new Date().toISOString(),
    areaDesc: "TownA, TownB, TownC"
  },
  open: true
};

describe("AlertDetails", () => {
  it("renders the alert headline", () => {
    render(<AlertDetails {...alertDetails} />);
    expect(screen.getByText("Test Alert")).toBeInTheDocument();
  });

  it("renders the alert description", () => {
    render(<AlertDetails {...alertDetails} />);
    expect(screen.getByText("This is a test alert description.")).toBeInTheDocument();
  });

  it("renders the effective and expires dates", () => {
    render(<AlertDetails {...alertDetails} />);
    expect(screen.getByText(/Effective:/)).toBeInTheDocument();
    expect(screen.getByText(/Expires:/)).toBeInTheDocument();
  });

  it("renders the affected areas", () => {
    render(<AlertDetails {...alertDetails} />);
    expect(screen.getByText("TownA, TownB, TownC")).toBeInTheDocument();
  });

  it("calls onClose when the top close button is clicked", () => {
    render(<AlertDetails {...alertDetails} />);
    const closeButton = screen.getByRole("button", { name: "closetop" });
    closeButton.click();
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onClose when the bottom close button is clicked", () => {
    render(<AlertDetails {...alertDetails} />);
    const closeButton = screen.getByRole("button", { name: "Close" });
    closeButton.click();
    expect(mockOnClose).toHaveBeenCalled();
  });
});
