import * as S from "./styles";
import GTALogo from "../../assets/images/gtaLogo.svg";

import { IHeader } from "./types";
import { listPositions } from "./content";
import { CgProfile } from "react-icons/cg";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { truncateText } from "../../utils/formats";
import { userLogged } from "../../redux/userName/selector";

export function Header({ className, transparent }: IHeader) {
  const navigate = useNavigate();
  const userName = useSelector(userLogged);

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
          {!!userName && (
            <li className="nav-user-profille">
              <CgProfile />
              {truncateText(`${userName}`, 9)}
            </li>
          )}
        </ul>
      </nav>
    </S.Header>
  );
}
