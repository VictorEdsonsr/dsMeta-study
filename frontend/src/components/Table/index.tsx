import axios from "axios";
import { useEffect } from "react";
import { Notificar } from "../Buttons";

function Table() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/sales")
      .then((response) => console.log(response));
  }, []);

  return (
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

      {table.map((item) => {
        return (
          <tbody className="text-center odd:bg-gray-700 hover:bg-slate-400">
            <tr key={item.id} className="border-t border-slate-400 h-16 ">
              <td className="hidden lg:table-cell">{item.id}</td>
              <td className="hidden sm:table-cell">{item.data}</td>
              <td>{item.nome}</td>
              <td className="hidden lg:table-cell">{item.visita}</td>
              <td className="hidden lg:table-cell">{item.venda}</td>
              <td>R$ {item.total}</td>
              <td>
                <Notificar />
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default Table;
