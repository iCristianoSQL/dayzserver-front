import { NavBar } from "../NavBar";
import * as S from "./styles";
import Background from "../../assets/images/background.jfif";
import Background2 from "../../assets/images/background2.jfif";
import Background3 from "../../assets/images/background3.jfif";
import { CardView } from "../CardView";
import { useEffect, useState } from "react";

export function InitialInfos() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.MainSection>
      {/* @ts-ignore */}
      <S.ChangedCarousel
        itemsToShow={1}
        isRTL={false}
        showArrows={false}
        showEmptySlots={false}
        enableAutoPlay
        enableMouseSwipe={false}
        autoPlaySpeed={3000}
      >
        <img src={Background} alt="" style={{ display: "flex" }} />
        <img src={Background2} alt="" style={{ display: "flex" }} />
        <img src={Background3} alt="" style={{ display: "flex" }} />
      </S.ChangedCarousel>
      <div className="contents">
        <CardView />
        <NavBar className="main-nav" transparent={scrollPosition} />
      </div>
    </S.MainSection>
  );
}
