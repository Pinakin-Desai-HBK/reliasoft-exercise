import { render, screen, fireEvent } from "@testing-library/react";
import Alerts from "./Alerts";
import useAlerts from "./useAlerts";
import { Alert } from "../../types/types";
import { describe, expect, it, vi, MockedFunction, beforeEach } from "vitest";
import "@testing-library/jest-dom";

vi.mock("./useAlerts");

const mockUseAlerts = useAlerts as MockedFunction<typeof useAlerts>;

const mockAlerts: Alert[] = [
  {
    id: "1",
    effective: "2023-01-01T00:00:00Z",
    effectiveLocale: "2023-01-01T00:00:00Z",
    expires: "2023-01-05T00:00:00Z",
    expiresLocale: "2023-01-05T00:00:00Z",
    headline: "Headline 1",
    description: "Description 1",
    areaDesc: "Area 1"
  },
  {
    id: "2",
    effective: "2023-01-02T00:00:00Z",
    effectiveLocale: "2023-01-02T00:00:00Z",
    expires: "2023-01-06T00:00:00Z",
    expiresLocale: "2023-01-06T00:00:00Z",
    headline: "Headline 2",
    description: "Description 2",
    areaDesc: "Area 2"
  }
];

describe("Alerts Component", () => {
  beforeEach(() => {
    mockUseAlerts.mockReturnValue({
      alerts: mockAlerts,
      alertsToShow: mockAlerts,
      loading: false,
      handleDateRangeChange: vi.fn()
    });
  });

  it("renders the DataGrid with alerts", () => {
    render(<Alerts state="CA" showAlertDetails={vi.fn()} />);
    expect(screen.getByText("Headline 1")).toBeInTheDocument();
    expect(screen.getByText("Headline 2")).toBeInTheDocument();
  });

  it("displays 'No alerts found for this state.' when no alerts are available", () => {
    mockUseAlerts.mockReturnValueOnce({
      alerts: [],
      alertsToShow: [],
      loading: false,
      handleDateRangeChange: vi.fn()
    });
    render(<Alerts state="CA" showAlertDetails={vi.fn()} />);
    expect(screen.getByText("No alerts found for this state.")).toBeInTheDocument();
  });

  it("calls showAlertDetails when an alert row is clicked", () => {
    const showAlertDetails = vi.fn();
    render(<Alerts state="CA" showAlertDetails={showAlertDetails} />);
    fireEvent.click(screen.getByText("Headline 1"));
    expect(showAlertDetails).toHaveBeenCalledWith(mockAlerts[0]);
  });

  it("displays loading indicator when loading is true", () => {
    mockUseAlerts.mockReturnValueOnce({
      alerts: [],
      alertsToShow: [],
      loading: true,
      handleDateRangeChange: vi.fn()
    });
    render(<Alerts state="CA" showAlertDetails={vi.fn()} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
