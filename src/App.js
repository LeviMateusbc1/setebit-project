import logo from "./logo.svg";
import "./App.css";
import Dive from "./components/Dive";
import NavBar from "./components/header/NavBar";
import Foter from "./components/footer/Foter";
const listDiv = [
  {
    color: "red",
    text1: "Campeonato 2",
    text2: "Aposta a partir de",
    text3: "O sorteio de hoje!",
    text4: "R$ 5,00",
    text5: "juaz",
  },
  {
    color: "blue",
    text1: "Campeonato 3",
    text2: "Aposta a partir de",
    text3: "O sorteio de hoje!",
    text4: "R$ 5,00",
    text5: "juaz",
  },
  {
    color: "pink",
    text1: "Campeonato 1",
    text2: "Aposta a partir de",
    text3: "O sorteio de hoje!",
    text4: "R$ 5,00",
    text5: "juaz",
  },
];
function App() {
  return (
    <div className="App">
      <NavBar />
      {listDiv.map((item, key) => (
        <Dive
          color={item.color}
          text1={item.text1}
          text2={item.text2}
          text3={item.text3}
          text4={item.text4}
          text5={item.text5}
          onclick={() => console.log("Hello world")}
        />
      ))}
      <Foter />
    </div>
  );
}

export default App;
