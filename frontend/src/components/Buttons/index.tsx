import notificationIcon from "../../assets/img/notificar.svg";

function Notificar() {
  return (
    <button className="mx-auto p-3 rounded-lg bg-transparent border-2 border-red-500 hover:bg-red-300">
      <img src={notificationIcon} alt="Botao de notificar por SMS" />
    </button>
  );
}

export { Notificar };
