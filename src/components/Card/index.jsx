import styles from "./styles.css";

const Card = (text) => {
  return (
    <div className={`container ${text.color}`}>
      <div className="content">
        <div className="bolao1">
          <div>
            <h2>{text.title}</h2>
            <h5>{text.subtitle}</h5>
          </div>
          <div className="bolao2">
            <h5 className="back1">{text.info}</h5>
            <h5 className="back2">{text.details}</h5>
          </div>
        </div>
        <div className="bolao3">
          <div className="back">Ver Mais</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
