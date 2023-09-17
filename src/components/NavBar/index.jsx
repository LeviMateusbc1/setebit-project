import { ArrowDown, Menu } from "../../icons";
import { LogoSeteBit } from "../Logo";
import styles from "./styles.css";
const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="header">
        <LogoSeteBit />
        <div className="header1 mark">
          <div className="header3 mark">
            <Menu />
          </div>
          Menu
          <ArrowDown />
        </div>
        <div className="mark">Ver bolões</div>
        <div className="mark">Aposte com seus números</div>
        <div className="mark">Resultados</div>
        <div className="header4">
          <button className={"button-default"}>Crie Bolões</button>
          <button className={"button-outlined"}>Contato</button>
        </div>
      </div>
      <div className="header5"></div>
    </div>
  );
};

export default NavBar;
