import Inputs from "../Inputs";

function VendasForm() {
  return (
    <form className="flex flex-col my-5 p-3 bg-transparent">
      <h1 className="text-xl font-bold text-indigo-300">Vendas</h1>

      <div className="flex flex-col md:flex-row">
        <Inputs />
        <Inputs />
      </div>
    </form>
  );
}

export default VendasForm;
