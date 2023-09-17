import { useEffect, useState } from "react";
import "./App.css";
import Dive from "./components/Dive";
import axios from "axios";
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
  const [competitionData, setCompetitionData] = useState(null);
  const apiKey = "a869a450b75e45f6950112e23de01209";

  useEffect(() => {
    // URL da API
    const apiUrl = `https://api.football-data.org/v4/areas/${2077}`;

    // Configuração do cabeçalho com sua chave de API
    const headers = {
      "X-Auth-Token": apiKey,
    };

    // Fazendo a solicitação GET para a API
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setCompetitionData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }, []);

  console.log(competitionData);
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
