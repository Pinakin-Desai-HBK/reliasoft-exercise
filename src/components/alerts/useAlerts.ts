import { useQuery } from "@tanstack/react-query";
import { UNSELECTED_STATE_CODE } from "../../consts/consts.ts";
import { useEffect, useState } from "react";
import { Alert, Feature } from "../../types/types.ts";

const getAlertsForStateCode = async (stateCode: string) => {
  const res = await fetch(`https://api.weather.gov/alerts/active?area=${stateCode}`);
  return await res.json();
};

const useAlerts = (stateCode: string) => {
  const { data, isFetching } = useQuery<{ features: Feature[] }>({
    queryKey: ["get", stateCode],
    queryFn: () => getAlertsForStateCode(stateCode),
    enabled: stateCode !== UNSELECTED_STATE_CODE && !!stateCode
  });
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [alertsToShow, setAlertsToShow] = useState<Alert[]>([]);

  const handleDateRangeChange = (startDate: string, endDate: string) => {
    console.log(8, alerts, startDate, endDate);
    setAlertsToShow(
      alerts.filter((alert: Alert) => {
        const alertDate = new Date(alert.effective);
        console.log(alertDate);
        return alertDate >= new Date(startDate) && alertDate <= new Date(endDate);
      })
    );
  };

  useEffect(() => {
    if (data) {
      const alerts = data.features.map(
        (feature: Feature): Alert => ({
          id: feature.properties.id,
          effective: feature.properties.effective,
          effectiveLocale: new Date(feature.properties.effective).toLocaleString(),
          expires: feature.properties.expires,
          expiresLocale: new Date(feature.properties.expires).toLocaleString(),
          headline: feature.properties.headline,
          description: feature.properties.description,
          areaDesc: feature.properties.areaDesc
        })
      );
      setAlerts(alerts);
      setAlertsToShow(alerts);
    }
  }, [data]);

  return { alerts, alertsToShow, loading: isFetching, handleDateRangeChange };
};

export default useAlerts;
