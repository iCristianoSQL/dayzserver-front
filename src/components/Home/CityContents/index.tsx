import * as S from "./styles";
import { motion } from "framer-motion";

import { SectionForPage } from "../../../styles/global";
const CJ = "https://i.ibb.co/ScqF8X9/cj.png";

export function CityContents() {
  return (
    <SectionForPage>
      <S.Container>
        <h1>Vantagens</h1>
        <S.Infos>
          <ul className="box-content-one">
            <li>Sistema de trabalho justo</li>
            <li>Cidade F2P, todos são bem-vindos</li>
            <li>Eventos diários com muitas recompensas</li>
          </ul>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={CJ}
            alt=""
          />
          <ul className="box-content-two">
            <li>Competição entre clãs</li>
            <li>RP limpo</li>
            <li>Carros e motos modernos (BMW, Camaro)</li>
          </ul>
        </S.Infos>
      </S.Container>
    </SectionForPage>
  );
}
