import "./index.scss";
import Header from "./components/Header";
import Table from "./components/Table";
import VendasForm from "./components/VendasForm";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center px-5">
        <section className="bg-slate-600 my-10 mx-2 p-2 w-full rounded-md">
          <div className="container mx-auto">
            <VendasForm />
            <Table />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
