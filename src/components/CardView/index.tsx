import * as S from "./styles";
import { Chip } from "../Chip";

import { FiUser } from "react-icons/fi";

import { GiNetworkBars } from "react-icons/gi";

import { getMTAStats } from "../../services/mtaServer";
import { useQuery } from "react-query";
import { toastMessage } from "../../utils/toastMessage";
import { MySpinner } from "../index";

export function CardView() {
  const cardImage = "https://i.ibb.co/XLnrPm7/card-Image.jpg"
  const {
    data: mtaData,
    isLoading,
    isError,
  } = useQuery("mta-api", async () => {
    try {
      const response = await getMTAStats();
      return response;
    } catch (error) {
      toastMessage({
        message: "Status do servidor não encontrado",
        type: "error",
      });
    }
  });

  return (
    <S.Card>
      <S.Image src={cardImage} alt="Imagem do Card" />
      {isError || !!!mtaData === false ? (
        <>
          {(!isLoading && (
            <div className="chips-box">
              <Chip text={mtaData.name} limit={49}>
                <S.IconOnlineServer />
              </Chip>
              <Chip text={`${mtaData.ip}:${mtaData.port}`}>
                <GiNetworkBars />
              </Chip>
              <Chip text={`${mtaData.playerCount}/${mtaData.playerSlots}`}>
                <FiUser />
              </Chip>
            </div>
          )) || <MySpinner />}
        </>
      ) : (
        <div className="chips-box">
          <Chip text={"Servidor Offline!"}>
            <S.IconOfflineServer />
          </Chip>
        </div>
      )}
    </S.Card>
  );
}
