import * as S from "./styles";
import { useState, useEffect } from "react";
import { Chip } from "../Chip";
import CardImage from "../../assets/images/cardImage.png";

import { CgRename } from "react-icons/cg";
import { FiUser, FiServer } from "react-icons/fi";

import { GiNetworkBars } from "react-icons/gi";

import { IMTAServerResponse } from "./types";
import { getMTAStats } from "../../services/mtaServer";
import { useQuery } from "react-query";
import { MySpinner } from "../Spinner";

export function CardView() {
  const {
    data: mtaData,
    isLoading,
    isError,
  } = useQuery("mta-api", async () => {
    try {
      const response = await getMTAStats();
      return response;
    } catch (error) {
      throw error;
    }
  });

  const findServer = mtaData?.data.find(
    (server: IMTAServerResponse) =>
      server.ip === "66.70.238.46" && server.port === 22613
  );

  return (
    <S.Card>
      <S.Image src={CardImage} alt="Imagem do Card" />
      {(!isError && (
        <>
          {(!isLoading && (
            <div className="chips-box">
              <Chip text={findServer.name} limit={49}>
                <FiServer />
              </Chip>
              <Chip text={`${findServer.ip}:${findServer.port}`}>
                <GiNetworkBars />
              </Chip>
              <Chip
                text={`${findServer.playerCount}/${findServer.playerSlots}`}
              >
                <FiUser />
              </Chip>
            </div>
          )) || <MySpinner />}
        </>
      )) || (
        <Chip text={"Servidor Offline!"}>
          <CgRename />
        </Chip>
      )}
    </S.Card>
  );
}
