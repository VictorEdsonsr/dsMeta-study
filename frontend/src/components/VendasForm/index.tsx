import axios from "axios";
import { useEffect, useState } from "react";
import DatesInputs from "../DatesInputs";

function VendasForm() {
  const max: Date = new Date();
  const min: Date = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return (
    <form className="flex flex-col my-5 p-3 bg-transparent">
      <h1 className="text-xl font-bold text-indigo-300">Vendas</h1>

      <div className="flex flex-col items-center justify-center">
        <DatesInputs dateRange={minDate} setDate={setMinDate} />
        <DatesInputs dateRange={maxDate} setDate={setMaxDate} />
      </div>
    </form>
  );
}

export default VendasForm;
