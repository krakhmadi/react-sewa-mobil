import "rsuite/styles/index.less"; // or 'rsuite/dist/rsuite.min.css'
import { DateRangePicker } from "rsuite";
import { DisabledDateFunction } from "rsuite/esm/DateRangePicker";
import { useState } from "react";

const {
  allowedMaxDays,
  allowedDays,
  allowedRange,
  beforeToday,
  afterToday,
  combine,
} = DateRangePicker;

const RangeCalendar = ({ ...props }) => {
  return (
    <DateRangePicker
      {...props}
      // disabledDate={allowedMaxDays(7)}
      // disabledDate={beforeToday()}
      disabledDate={combine(allowedMaxDays(7), beforeToday())}
      showOneCalendar
      placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
      character=" - "
      format="dd MMM yyyy"
      ranges={[]}
    />
  );
};

export default RangeCalendar;
