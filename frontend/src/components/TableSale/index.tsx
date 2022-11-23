import axios from "axios";
import { useEffect, useState } from "react";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/requests";
import { Notificar } from "../Buttons";
import VendasForm from "../VendasForm";

function Table() {
  
  const max: Date = new Date();
  const min: Date = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);
  const [sales,setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const dmin = minDate.toISOString().slice(0,10);
    const dmax = maxDate.toISOString().slice(0,10);

    axios
      .get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
      .then((response) => setSales(response.data.content));
  }, [minDate,maxDate]);

  return (
    <>
     <VendasForm minDate={minDate} maxDate={maxDate} setMinDate={setMinDate} setMaxDate={setMaxDate}/>

         <table className="w-full">

     
      <thead className="h-14">
        <tr>
          <th className="hidden lg:table-cell">ID</th>
          <th className="hidden sm:table-cell">Data</th>
          <th>Vendedor</th>
          <th className="hidden lg:table-cell">Visitas</th>
          <th className="hidden lg:table-cell">Vendas</th>
          <th>Total</th>
          <th>Notificar</th>
        </tr>
      </thead>
    <tbody className="text-center odd:bg-gray-700 ">
      {sales.map((item) => {
        return (
        
              <tr key={item.id} className="border-t hover:bg-slate-400 border-slate-400 h-16 ">
                <td className="hidden lg:table-cell">{item.id}</td>
                <td className="hidden sm:table-cell">{new Date(item.date).toLocaleDateString()}</td>
                <td>{item.sellerName}</td>
                <td className="hidden lg:table-cell">{item.visited}</td>
                <td className="hidden lg:table-cell">{item.deals}</td>
                <td>R$ {item.amount.toFixed(2)}</td>
                <td>
                  <Notificar saleId={item.id} />
                </td>
              </tr>
        );
      })}
</tbody>

    </table>
    </>

  );
}

export default Table;
