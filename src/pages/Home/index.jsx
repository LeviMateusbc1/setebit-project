import { NavBar, Slides } from "../../components";
import * as Styled from "./styles";
import Littlecard from "../../components/LittleCard";
import Middle from "../../components/Middle";

export function HomePage() {
  return (
    <Styled.Container>
      <NavBar />
      <Styled.SlideContainer>
        <Slides listCard={[]} />
      </Styled.SlideContainer>
      <Middle text1="LF-NGD-017" text2="19" text3="150" text4="65" />
      {/* <Foter /> */}
    </Styled.Container>
  );
}
