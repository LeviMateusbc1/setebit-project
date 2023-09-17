import styles from "./styles.css";

const Card = (text) => {
  return (
    <div className={`container ${text.color}`}>
      <div className="content">
        <div className="bolao1">
          <div>
            <h2>{text.text1}</h2>
            <h5>{text.text2}</h5>
          </div>
          <div className="bolao2">
            <h5 className="back1">{text.text3}</h5>
            <h5 className="back2">{text.text4}</h5>
          </div>
        </div>
        <div className="bolao3">
          <div>Escolher número</div>
          <div className="back">Ver bolões</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
