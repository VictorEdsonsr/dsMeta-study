import "./index.scss";
import Header from "./components/Header";
import Table from "./components/Table";
import VendasForm from "./components/VendasForm";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <section className="bg-slate-600 my-10 mx-2 p-2 rounded-md">
          <div className="container">
            <VendasForm />
            <Table />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
