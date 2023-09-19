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
              imgUrl:
                "https://clubepaineiras.org.br/wp-content/uploads/2022/05/jogadores.jpg",
            },
            {
              imgUrl:
                "https://images.prismic.io/rivalryglhf/d199c12e-41cc-48fe-be24-0da34a06c55c_campeonatos.jpg",
            },
            {
              imgUrl:
                "https://www.leituradejogo.com.br/wp-content/uploads/2018/06/champions-league.jpg",
            },
            {
              imgUrl:
                "https://www.ogol.com.br/img/temas/6_campeonatos_do_mundo.png",
            },
            {
              imgUrl:
                "https://imagens.ebc.com.br/58H0l1P4TDvjGH2LPgD_yp7vgjA=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/brasileiro_feminino_2021_corinthians_campeao.jpg",
            },
            {
              imgUrl:
                "https://s2-ge.glbimg.com/KCHUSl1ZHdoanATlAKTgoMixlng=/0x0:1080x608/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/K/Q/whez6GSh2HQK1X6PK2MA/inicio-brasileirao.jpg",
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
