import { LogoSeteBit } from "../Logo";
import styles from "./styles.css";
const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="header">
        <LogoSeteBit />
        <div className="header1 mark">
          <div className="header3 mark">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_2765)">
                <path
                  d="M3.56 16.5H20.06V14.6667H3.56V16.5ZM3.56 11.9167H20.06V10.0833H3.56V11.9167ZM3.56 5.5V7.33333H20.06V5.5H3.56Z"
                  fill="#008AFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_2765">
                  <rect
                    width="22"
                    height="22"
                    fill="white"
                    transform="translate(0.809998)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          Menu
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_2769)">
              <path
                d="M5.89 5.72656L8.95 8.7799L12.01 5.72656L12.95 6.66656L8.95 10.6666L4.95 6.66656L5.89 5.72656Z"
                fill="#008AFF"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_2769">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.949997)"
                />
              </clipPath>
            </defs>
          </svg>
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
