import "rsuite/styles/index.less"; // or 'rsuite/dist/rsuite.min.css'
import { DateRangePicker } from "rsuite";
import { DisabledDateFunction } from "rsuite/esm/DateRangePicker";
const {
  allowedMaxDays,
  allowedDays,
  allowedRange,
  beforeToday,
  afterToday,
  combine,
} = DateRangePicker;

const RangeCalendar = () => {
  //   type DisabledDateFunction = (
  //     /** Date used to determine if disabling is required. */
  //     date: Date,

  //     /** Date selected. */
  //     selectDate?: ValueType,

  //     /**
  //          Whether to choose to finish now.
  //          If `false`, only the start date is selected, waiting for the selection end date.
  //          */
  //     selectedDone?: false,

  //     // Call the target of the `disabledDate` function
  //     target?: "CALENDAR" | "TOOLBAR_BUTTON_OK" | "TOOLBAR_SHORTCUT",
  //   ) => false;
  return (
    <DateRangePicker
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
