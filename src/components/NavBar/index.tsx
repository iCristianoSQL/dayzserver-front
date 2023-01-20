import * as S from "./styles";
import { INavBar } from "./types";

export function NavBar({ className, transparent }: INavBar) {
  return <S.Nav className={className} transparent={transparent}></S.Nav>;
}
