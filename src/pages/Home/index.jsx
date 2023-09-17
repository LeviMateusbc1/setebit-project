import axios from "axios";
import { useEffect, useState } from "react";
import { Foter, NavBar, Slides } from "../../components";
import * as Styled from "./styles";
import Littlecard from "../../components/LittleCard";
import Middle from "../../components/Middle";

const listCard = [
  {
    color: "pink",
    title: "Campeonato 2",
    subtitle: "Aposta a partir de",
    info: "O sorteio de hoje!",
    details: "R$ 5,00",
  },
  {
    color: "blue",
    title: "Campeonato 2",
    subtitle: "Aposta a partir de",
    info: "O sorteio de hoje!",
    details: "R$ 5,00",
  },
  {
    color: "red",
    title: "Campeonato 2",
    subtitle: "Aposta a partir de",
    info: "O sorteio de hoje!",
    details: "R$ 5,00",
  },
  {
    color: "red",
    title: "Campeonato 2",
    subtitle: "Aposta a partir de",
    info: "O sorteio de hoje!",
    details: "R$ 5,00",
  },
  {
    color: "red",
    title: "Campeonato 2",
    subtitle: "Aposta a partir de",
    info: "O sorteio de hoje!",
    details: "R$ 5,00",
  },
  {
    color: "red",
    title: "Campeonato 2",
    subtitle: "Aposta a partir de",
    info: "O sorteio de hoje!",
    details: "R$ 5,00",
  },
  {
    color: "red",
    title: "Campeonato 2",
    subtitle: "Aposta a partir de",
    info: "O sorteio de hoje!",
    details: "R$ 5,00",
  },
];

export function HomePage() {
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
      <NavBar />

      <Styled.SlideContainer>
        <Slides listCard={listCard} />
      </Styled.SlideContainer>
      <Middle />
      <Littlecard
        text1="Lotofácil"
        text2="A DEFINIR"
        text3="numeros na"
        text4="Lotofácil"
      />
      <Foter />
    </div>
  );
}
