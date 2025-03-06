import { DateRangePicker } from "react-date-range";
import IconButton from "@mui/material/IconButton";
import DateRange from "@mui/icons-material/DateRange";
import { DataRangeProps } from "../../types/types.ts";
import useDateRange from "./useDateRange.ts";
import Button from "@mui/material/Button";

const DataRange = ({ initialStartDate, initialEndDate, selectionChange }: DataRangeProps) => {
  const { showPicker, setShowPicker, selectionRange, handleSelect, handleClear } = useDateRange({
    initialStartDate: initialStartDate,
    initialEndDate: initialEndDate,
    selectionChange
  });

  return (
    <>
      <IconButton aria-label="show picker" color="primary" onClick={() => setShowPicker(!showPicker)}>
        <DateRange />
      </IconButton>
      <Button onClick={() => handleClear()}>Clear Date Selection</Button>
      {showPicker ? (
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} showMonthAndYearPickers={false} />
      ) : null}
    </>
  );
};

export default DataRange;
