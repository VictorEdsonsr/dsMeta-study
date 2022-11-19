import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatesInputs({ dateRange, setDate }: any) {
  return (
    <DatePicker
      selected={dateRange}
      onChange={(date: Date) => setDate(date)}
      className=" bg-slate-800 text-white rounded-lg outline-none p-2 text-md my-2 "
      dateFormat="dd/MM/yyyy"
    />
  );
}
export default DatesInputs;
