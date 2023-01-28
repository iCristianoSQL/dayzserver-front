import { BiSupport, BiNetworkChart, BiRun, BiMedal } from "react-icons/bi";
import { DescriptionCard } from "../DescriptionCard";
import { textsForCards } from "./content";
import * as S from "./styles";

export function DescriptiveComponent() {
  return (
    <S.Container>
      <h1>Porquê escolher a BGM?</h1>
      <div className="cards-box">
        <DescriptionCard icon={<BiSupport />} text={textsForCards.support} />
        <DescriptionCard
          icon={<BiNetworkChart />}
          text={textsForCards.network}
        />
        <DescriptionCard icon={<BiRun />} text={textsForCards.fast} />
        <DescriptionCard icon={<BiMedal />} text={textsForCards.challenger} />
      </div>
    </S.Container>
  );
}
