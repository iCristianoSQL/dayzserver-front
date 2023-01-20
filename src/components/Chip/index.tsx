import * as S from "./styles";
import { IChips } from "./types";

export function Chip({ background, fontColor, children, text }: IChips) {
  return (
    <S.Chip background={background} fontColor={fontColor}>
      {children}
      {text}
    </S.Chip>
  );
}
