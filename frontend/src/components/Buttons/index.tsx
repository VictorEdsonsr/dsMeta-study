import axios from "axios";
import { toast } from "react-toastify";
import notificationIcon from "../../assets/img/notificar.svg";
import { BASE_URL } from "../../utils/requests";

type Props = {
  saleId:number;
}

const handleClick = (saleId : number) => {
  axios.get(`${BASE_URL}/sales/${saleId}/notification`)
  .then(response => toast.info("SMS enviado com sucesso"));
}

function Notificar({saleId} : Props) {
  return (
    <button onClick={() => handleClick(saleId)} className="mx-auto p-3 rounded-lg bg-transparent border-2 border-red-500 hover:bg-red-300">
      <img src={notificationIcon} alt="Botao de notificar por SMS" />
    </button>
  );
}

export { Notificar };
