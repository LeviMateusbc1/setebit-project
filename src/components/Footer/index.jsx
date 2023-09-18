import { useMediaQuery } from "@react-hook/media-query";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../icons";
import * as Style from "./style";

const Footer = () => {
  const isTablet = useMediaQuery("(max-width: 960px)");
  return (
    <Style.FooterContainer>
      {!isTablet ? (
        <Style.FooterWrapper>
          <img src="/banner-footer.png" alt="Banner do Footer" />
        </Style.FooterWrapper>
      ) : null}
      <Style.FooterText>Siga nossas redes sociais:</Style.FooterText>
      <Style.FooterIconsContainer>
        <InstagramIcon />
        <LinkedinIcon />
        <FacebookIcon />
        <YoutubeIcon />
      </Style.FooterIconsContainer>
      ©Levi Mateus
    </Style.FooterContainer>
  );
};

export default Footer;
