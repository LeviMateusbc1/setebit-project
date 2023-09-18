import styles from "./styles.css";
const Middle = (middle) => {
  return (
    <div>
      <div className="middle1">
        <b>Grupo</b> {middle.text1}
        <div className="middle2">
          Premiada!
          <div className="middle3"></div>
        </div>
        <div className="middle5">
          Ver detalhes
          <div className="middle4"></div>
        </div>
        <div className="middle6">
          <h6>restam</h6>
          <div className="middle8">
            <div className="middle7">
              {middle.text2}/{middle.text3}
            </div>
          </div>
          <b>R$ {middle.text4}</b>
        </div>
      </div>
    </div>
  );
};

export default Middle;
