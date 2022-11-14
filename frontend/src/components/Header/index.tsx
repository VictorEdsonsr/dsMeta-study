import logo from "../../assets/img/logo.svg";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 p-3">
      <img src={logo} alt="Logo do site" />
      <h1 className="font-bold my-2">dsMeta</h1>
      <p className="font-thin text-xs">
        Desenvolvido por <a href="">@edvictr_</a>
      </p>
    </header>
  );
}

export default Header;
