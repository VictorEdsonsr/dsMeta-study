import "./index.scss";
import Header from "./components/Header";
import TableSale from "./components/TableSale";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <>
      <ToastContainer/>
      <Header />
      <main className="flex flex-col items-center justify-center px-5">
        <section className="bg-slate-600 my-10 mx-2 p-2 w-full rounded-md">
          <div className="container mx-auto">
            <TableSale />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
