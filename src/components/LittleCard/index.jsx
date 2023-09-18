// rafce
const Littlecard = (card) => {
  return (
    <div>
      <div className="card1">
        <div className={`card2 ${card.color}`}>
          {card.text1}
          <br />
          {card.text2}
        </div>
        <div className="card3">
          Aposte com seus <br />
          {card.text3} <b>{card.text4}</b>
        </div>
        <div className="card4">
          <div className="card5"></div>
          <b>HOJE</b>
        </div>
      </div>
    </div>
  );
};

export default Littlecard;
