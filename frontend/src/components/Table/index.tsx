import { Notificar } from "../Buttons";

function Table() {
  const table = [
    {
      id: 345,
      data: "30/04/05",
      visita: 3,
      venda: 43,
      nome: "anakin",
      total: 55400,
    },
    {
      id: 345,
      data: "30/04/05",
      visita: 3,
      venda: 43,
      nome: "anakin",
      total: 55400,
    },
    {
      id: 345,
      data: "30/04/05",
      visita: 3,
      venda: 43,
      nome: "anakin",
      total: 55400,
    },

    {
      id: 345,
      data: "30/04/05",
      visita: 3,
      venda: 43,
      nome: "anakin",
      total: 55400,
    },
  ];

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
