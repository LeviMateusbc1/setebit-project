import styles from "./header.css";
const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="header">
        <div> SeteBit </div>
        <div className="header1 mark">
          <div className="header3 mark">
            <div className="header2"></div>
            <div className="header2"></div>
            <div className="header2"></div>
          </div>
          Menu
        </div>
        <div className="mark">Ver bolões</div>
        <div className="mark">Aposte com seus números</div>
        <div className="mark">Resultados</div>
        <div className="header4">
          <button>Crie Bolões</button>
        </div>
      </div>
      <div className="header5"></div>
    </div>
  );
};

export default NavBar;
