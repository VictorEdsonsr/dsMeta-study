import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function VendasForm({minDate, maxDate, setMinDate, setMaxDate} : any) {


  return (
    <form className="flex flex-col my-5 p-3 bg-transparent">
      <h1 className="text-xl font-bold text-indigo-300">Vendas</h1>

      <div className="flex flex-col items-center justify-center">
      <DatePicker
      selected={minDate}
      onChange={(date: Date) => setMinDate(date)}
      className=" bg-slate-800 text-white rounded-lg outline-none p-2 text-md my-2 "
      dateFormat="dd/MM/yyyy"
    />
      <DatePicker
        selected={maxDate}
        onChange={(date: Date) => setMaxDate(date)}
        className=" bg-slate-800 text-white rounded-lg outline-none p-2 text-md my-2 "
        dateFormat="dd/MM/yyyy"
      />
      </div>
    </form>
  );
}

export default VendasForm;
