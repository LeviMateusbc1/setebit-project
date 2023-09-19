import { useEffect, useState } from "react";
import { Footer, NavBar, Slides, Input, CustomTable } from "../../components";
import * as Styled from "./styles";

export function HomePage() {
  const [name, setName] = useState("");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await fetch("v4/areas/"); // Use o prefixo '/api'
        const data = await response.json();
        setMatches(data.matches); // Supondo que a resposta tem uma propriedade 'matches'
      } catch (error) {
        console.error("Erro ao buscar partidas:", error);
      }
    }

    fetchMatches();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <Styled.Container>
      <NavBar />
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
      <CustomTable />
      <Footer />
    </Styled.Container>
  );
}
