import { NavBar } from "../NavBar";
import * as S from "./styles";
import { motion } from "framer-motion";
import Background from "../../assets/images/background.jfif";
import { CardView } from "../CardView";

export function InitialInfos() {
  return (
    <S.MainSection>
      <div className="contents">
        <CardView />
        <NavBar className="main-nav" />
        {/* <img src={Background} alt="" className="main-image" /> */}
      </div>
    </S.MainSection>
  );
}
