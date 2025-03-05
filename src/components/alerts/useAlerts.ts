import { useQuery } from "@tanstack/react-query";
import { UNSELECTED_STATE_CODE } from "../../consts.ts";

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

  console.log(status, data, error, isFetching);

  const alerts: string[] = [];
  return { alerts };
};

export default useAlerts;
