import * as S from "./styles";
import { INavBar } from "./types";

export function NavBar({ className }: INavBar) {
  return (
    <S.Nav className={className}>
      <ul>
        <li>aloooo</li>
      </ul>
    </S.Nav>
  );
}
