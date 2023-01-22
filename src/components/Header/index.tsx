import * as S from "./styles";
import GTALogo from "../../assets/images/gtaLogo.svg";

import { IHeader } from "./types";
import { listPositions } from "./content";
import { CgProfile } from "react-icons/cg";

import { useNavigate } from "react-router-dom";

export function Header({ className, transparent }: IHeader) {
  const navigate = useNavigate();

  return (
    <S.Header className={className} transparent={transparent}>
      <img src={GTALogo} alt="Logo GTA" />
      <nav>
        <ul>
          {listPositions.map((event) => (
            <li
              className="listed-by-mapping"
              key={event.id}
              onClick={() => navigate(`${event.route}`)}
            >
              {event.name}
            </li>
          ))}
          <li className="nav-user-profille">
            <CgProfile />
            Cristiano
          </li>
        </ul>
      </nav>
    </S.Header>
  );
}
