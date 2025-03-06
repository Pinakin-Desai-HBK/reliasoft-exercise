import { DateRangePicker } from "react-date-range";
import IconButton from "@mui/material/IconButton";
import DateRange from "@mui/icons-material/DateRange";
import { DataRangeProps } from "../../types/types.ts";
import useDateRange from "./useDateRange.ts";

const DataRange = ({ startDate, endDate, selectionChange }: DataRangeProps) => {
  const { showPicker, setShowPicker, selectionRange, handleSelect } = useDateRange({
    startDate,
    endDate,
    selectionChange
  });

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
