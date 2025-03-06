export type Alert = {
  id: string;
  effective: string;
  effectiveLocale: string;
  expires: string;
  expiresLocale: string;
  headline: string;
  description: string;
  areaDesc: string;
};

export type Feature = { properties: Alert };

export type AlertDetailsProps = {
  open: boolean;
  alertDetails: Alert;
  onClose: () => void;
};

export type AlertsProps = {
  state: string;
  showAlertDetails: (alertDetails: Alert) => void;
};

export type StateSelectorProps = {
  stateCode: string;
  handleChange: (newState: string) => void;
};

export type DataRangeProps = {
  initialStartDate: string;
  initialEndDate: string;
  selectionChange: (startDate: string, endDate: string) => void;
};
