import { Footer, NavBar, Slides, Input } from "../../components";
import * as Styled from "./styles";
import Middle from "../../components/Middle";
import { useEffect, useState } from "react";
import { fetchMatches } from "../../services";

export function HomePage() {
  const [name, setName] = useState("");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function getMatches() {
      try {
        const response = await fetch("/v4/areas/"); // Use o prefixo '/api'
        const data = await response.json();
        setMatches(data.matches); // Supondo que a resposta tem uma propriedade 'matches'
      } catch (error) {
        console.error("Erro ao buscar partidas:", error);
      }
    }

    getMatches();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <Styled.Container>
      <NavBar />
      <Styled.InputContainer>
        <Input
          label="Data Inicial"
          type="date"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
        <Input
          label="Data Final"
          type="date"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Styled.InputContainer>
      <Middle text1="LF-NGD-017" text2="19" text3="150" text4="65" />
      <Styled.SlideContainer>
        <Slides
          listCard={[
            {
              title: "Campeonato 01",
            },
            {
              title: "Campeonato 01",
            },
            {
              title: "Campeonato 01",
            },
            {
              title: "Campeonato 01",
            },
            {
              title: "Campeonato 01",
            },
            {
              title: "Campeonato 01",
            },
            {
              title: "Campeonato 01",
            },
            {
              title: "Campeonato 01",
            },
          ]}
        />
      </Styled.SlideContainer>
      <Footer />
    </Styled.Container>
  );
}
