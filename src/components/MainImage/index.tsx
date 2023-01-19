import { NavBar } from "../NavBar";
import * as S from "./styles";
import { motion } from "framer-motion";
import Background from "../../assets/images/background.jfif";

export function MainImage() {
  return (
    <S.MainSection>
      <div className="contents">
        <NavBar className="main-nav" />
        <img src={Background} alt="" className="main-image" />
      </div>
    </S.MainSection>
  );
}
