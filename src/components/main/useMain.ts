import { useEffect, useState } from "react";
import { STORED_STATE_CODE, UNSELECTED_STATE_CODE } from "../../consts/consts.ts";
import { Alert } from "../../types/types.ts";

const useMain = () => {
  const [stateCode, setStateCode] = useState(UNSELECTED_STATE_CODE);
  const [showDetails, setShowDetails] = useState(false);
  const [alertDetails, setAlertDetails] = useState<Alert>();

  const showAlertDetails = (alertDetails: Alert) => {
    setShowDetails(true);
    setAlertDetails(alertDetails);
  };

  const storeStateCode = (stateCode: string) => {
    localStorage.setItem(STORED_STATE_CODE, stateCode);
  };

  const handleStateChange = (stateCode: string) => {
    setStateCode(stateCode);
    storeStateCode(stateCode);
  };

  useEffect(() => {
    const storedStateCode = localStorage.getItem(STORED_STATE_CODE);
    if (storedStateCode) {
      setStateCode(storedStateCode);
    }
  });

  return {
    stateCode,
    showDetails,
    setShowDetails,
    showAlertDetails,
    alertDetails,
    handleStateChange
  };
};

export default useMain;
