import * as S from "./styles";
import { CiInstagram, CiTwitter, CiFacebook } from "react-icons/ci";

export function Footer() {
  const footerImage = "https://i.ibb.co/XLnrPm7/card-Image.jpg";
  return (
    <S.Footer>
      <img src={footerImage} alt="Logo do footer" />
      <div>
        <span>BMGAMING - Todos os direitos reservados.</span>
      </div>
      <ul>
        <li>
          <CiInstagram fill="white" />
        </li>
        <li>
          <CiTwitter fill="white" />
        </li>
        <li>
          <CiFacebook fill="white" />
        </li>
      </ul>
    </S.Footer>
  );
}
