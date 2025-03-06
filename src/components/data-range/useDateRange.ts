import { useState } from "react";
import { RangeKeyDict } from "react-date-range";
import { DataRangeProps } from "../../types/types.ts";

const useDateRange = ({ startDate, endDate, selectionChange }: DataRangeProps) => {
  console.log(111, startDate, endDate);
  const [showPicker, setShowPicker] = useState(false);
  const initialStartDate = new Date(startDate);
  const initialEndDate = new Date(endDate);
  const [selectionRange, setSelectionRange] = useState({
    startDate: initialStartDate,
    endDate: initialEndDate,
    key: "selection"
  });

  const handleSelect = (ranges: RangeKeyDict) => {
    console.log(ranges);
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
      startDate: initialStartDate,
      endDate: initialEndDate
    });
    selectionChange(initialStartDate.toISOString(), initialEndDate.toISOString());
  };

  return { showPicker, setShowPicker, selectionRange, handleSelect, handleClear };
};

export default useDateRange;
