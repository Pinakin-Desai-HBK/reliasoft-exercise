import { useState } from "react";
import { RangeKeyDict } from "react-date-range";
import { DataRangeProps } from "../../types/types.ts";

const useDateRange = ({ startDate, endDate, selectionChange }: DataRangeProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const startDateTime = new Date(startDate);
  const endDateTime = new Date(endDate);

  const handleSelect = (ranges: RangeKeyDict) => {
    if (
      ranges.selection.startDate &&
      ranges.selection.endDate &&
      ranges.selection.startDate.getTime() > startDateTime.getTime() &&
      ranges.selection.endDate.getTime() < endDateTime.getTime()
    ) {
      selectionChange(ranges.selection.startDate.toISOString(), ranges.selection.endDate.toISOString());
    }
  };

  const selectionRange = { startDate: startDateTime, endDate: endDateTime, key: "selection" };

  return { showPicker, setShowPicker, selectionRange, handleSelect };
};

export default useDateRange;
