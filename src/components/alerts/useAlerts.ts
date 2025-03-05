import { useQuery } from "@tanstack/react-query";
import { UNSELECTED_STATE_CODE } from "../../consts.ts";
import { useEffect, useState } from "react";
import { Feature } from "../../types.ts";

const getAlertsForStateCode = async (stateCode: string) => {
  const res = await fetch(`https://api.weather.gov/alerts/active?area=${stateCode}`);
  return await res.json();
};

const useAlerts = (stateCode: string) => {
  const { data, isFetching } = useQuery({
    queryKey: ["get", stateCode],
    queryFn: () => getAlertsForStateCode(stateCode),
    enabled: stateCode !== UNSELECTED_STATE_CODE && !!stateCode
  });
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setAlerts(
        data.features.map((feature: Feature) => ({
          id: feature.properties.id,
          effective: new Date(feature.properties.effective).toLocaleString(),
          expires: new Date(feature.properties.expires).toLocaleString(),
          headline: feature.properties.headline,
          descriptions: feature.properties.description,
          areaDesc: feature.properties.areaDesc
        }))
      );
    }
  }, [data]);

  return { alerts, loading: isFetching };
};

export default useAlerts;
