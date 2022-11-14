import { Notificar } from "../Buttons";

function Table() {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Vendedor</th>
          <th>Total</th>
          <th>Notificar</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr className="border-t-2 m">
          <td>Anakin</td>
          <td>R$ 55300.00</td>
          <td>
            <Notificar />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
