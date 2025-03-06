import { DateRangePicker, RangeKeyDict } from "react-date-range";
import IconButton from "@mui/material/IconButton";
import DateRange from "@mui/icons-material/DateRange";
import { useState } from "react";
import { DataRangeProps } from "../../types/types.ts";

const DataRange = ({ startDate, endDate, selectionChange }: DataRangeProps) => {
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

  return (
    <>
      <IconButton aria-label="show picker" color="primary" onClick={() => setShowPicker(!showPicker)}>
        <DateRange />
      </IconButton>
      {showPicker ? <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> : null}
    </>
  );
};

export default DataRange;
