import logo from "./logo.svg";
import "./App.css";
import Dive from "./components/Dive";
const listDiv = [
  {
    text1: "Campeonato 1",
    text2: "Aposta a partir de",
    text3: "O sorteio de hoje!",
    text4: "R$ 5,00",
    text5: "juaz",
  },
  {
    text1: "Campeonato 2",
    text2: "Aposta a partir de",
    text3: "O sorteio de hoje!",
    text4: "R$ 5,00",
    text5: "juaz",
  },
  {
    text1: "Campeonato 3",
    text2: "Aposta a partir de",
    text3: "O sorteio de hoje!",
    text4: "R$ 5,00",
    text5: "juaz",
  },
];
function App() {
  return (
    <div className="App">
      {listDiv.map((item, key) => (
        <Dive
          text1={item.text1}
          text2={item.text2}
          text3={item.text3}
          text4={item.text4}
          text5={item.text5}
        />
      ))}
    </div>
  );
}

export default App;
