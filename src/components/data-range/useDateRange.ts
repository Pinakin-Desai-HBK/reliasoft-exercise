import { useState } from "react";
import { RangeKeyDict } from "react-date-range";
import { DataRangeProps } from "../../types/types.ts";

const useDateRange = ({ initialStartDate, initialEndDate, selectionChange }: DataRangeProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(initialStartDate),
    endDate: new Date(initialEndDate),
    key: "selection"
  });

  const handleSelect = (ranges: RangeKeyDict) => {
    if (ranges.selection.startDate && ranges.selection.endDate) {
      setSelectionRange({
        ...selectionRange,
        endDate: ranges.selection.endDate,
        startDate: ranges.selection.startDate
      });

      if (ranges.selection.startDate !== ranges.selection.endDate) {
        ranges.selection.endDate.setDate(ranges.selection.endDate.getDate() + 1);
        selectionChange(ranges.selection.startDate.toISOString(), ranges.selection.endDate.toISOString());
      }
    }
  };

  const handleClear = () => {
    setSelectionRange({
      ...selectionRange,
      startDate: new Date(initialStartDate),
      endDate: new Date(initialEndDate)
    });
    selectionChange(new Date(initialStartDate).toISOString(), new Date(initialEndDate).toISOString());
  };

  return { showPicker, setShowPicker, selectionRange, handleSelect, handleClear };
};

export default useDateRange;
