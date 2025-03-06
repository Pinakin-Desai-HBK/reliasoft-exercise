import { useState } from "react";
import { RangeKeyDict } from "react-date-range";
import { DataRangeProps } from "../../types/types.ts";

const useDateRange = ({ startDate, endDate, selectionChange }: DataRangeProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const initialStartDate = new Date(startDate);
  const initialEndDate = new Date(endDate);
  const [selectionRange, setSelectionRange] = useState({
    startDate: initialStartDate,
    endDate: initialEndDate,
    key: "selection"
  });

  const handleSelect = (ranges: RangeKeyDict) => {
    if (
      ranges.selection.startDate &&
      ranges.selection.endDate &&
      ranges.selection.startDate.getTime() > initialStartDate.getTime() &&
      ranges.selection.endDate.getTime() < initialEndDate.getTime()
    ) {
      selectionChange(ranges.selection.startDate.toISOString(), ranges.selection.endDate.toISOString());
      setSelectionRange({
        ...selectionRange,
        endDate: ranges.selection.endDate,
        startDate: ranges.selection.startDate
      });
    }
  };

  const handleClear = () => {
    setSelectionRange({
      ...selectionRange,
      startDate: initialStartDate,
      endDate: initialEndDate
    });
  };

  return { showPicker, setShowPicker, selectionRange, handleSelect, handleClear };
};

export default useDateRange;
