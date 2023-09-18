import { NavBar, Slides } from "../../components";
import * as Styled from "./styles";

export function HomePage() {
  return (
    <Styled.Container>
      <NavBar />
      <Styled.SlideContainer>
        <Slides listCard={[]} />
      </Styled.SlideContainer>
      {/* <Foter /> */}
    </Styled.Container>
  );
}
