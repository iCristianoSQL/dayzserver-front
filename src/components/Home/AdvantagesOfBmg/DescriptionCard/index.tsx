import * as S from "./styles";
import { BiSupport } from "react-icons/bi";
import { IDescriptionCard } from "./types";

export function DescriptionCard({ icon, text }: IDescriptionCard) {
  return (
    <S.Container>
      <div className="box-icon">{icon}</div>
      <p>{text}</p>
    </S.Container>
  );
}
