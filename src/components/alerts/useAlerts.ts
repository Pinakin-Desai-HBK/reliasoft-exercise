import { useQuery } from "@tanstack/react-query";
import { UNSELECTED_STATE_CODE } from "../../consts.ts";
import { useEffect, useState } from "react";

const getAlertsForState = async (stateCode: string) => {
  const res = await fetch(`https://api.weather.gov/alerts/active?area=${stateCode}`);
  return await res.json();
};

const useAlerts = (stateCode: string) => {
  const { status, data, error, isFetching } = useQuery({
    queryKey: ["get", stateCode],
    queryFn: () => getAlertsForState(stateCode),
    enabled: stateCode !== UNSELECTED_STATE_CODE && !!stateCode
  });
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setAlerts(
        data.features.map(
          (feature: { properties: { id: string; effective: string; expires: string; headline: string } }) => ({
            id: feature.properties.id,
            effective: new Date(feature.properties.effective).toLocaleString(),
            expires: new Date(feature.properties.expires).toLocaleString(),
            headline: feature.properties.headline
          })
        )
      );
    }
  }, [data]);

  return { alerts, loading: isFetching };
};

export default useAlerts;
