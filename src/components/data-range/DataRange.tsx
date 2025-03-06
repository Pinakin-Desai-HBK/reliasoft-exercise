import { DateRangePicker } from "react-date-range";
import IconButton from "@mui/material/IconButton";
import DateRange from "@mui/icons-material/DateRange";
import { useState } from "react";

const DataRange = () => {
  const [showPicker, setShowPicker] = useState(false);

  const handleSelect = (ranges) => {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  };

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
