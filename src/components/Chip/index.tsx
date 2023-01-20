import { truncateText } from "../../utils/formats";
import * as S from "./styles";
import { IChips } from "./types";

export function Chip({ background, fontColor, children, text, limit }: IChips) {
  const truncatedText = truncateText(text ?? '', limit ?? 50);

  return (
    <S.Chip background={background} fontColor={fontColor}>
      {children}
      {truncatedText}
    </S.Chip>
  );
}
