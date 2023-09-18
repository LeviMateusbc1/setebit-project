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
    <Styled.Container>
      <NavBar />
      <Styled.SlideContainer>
        <Slides listCard={listCard} />
      </Styled.SlideContainer>
      <Middle text1="LF-NGD-017" text2="19" text3="150" text4="65" />
      {/* <Foter /> */}
    </Styled.Container>
  );
}
