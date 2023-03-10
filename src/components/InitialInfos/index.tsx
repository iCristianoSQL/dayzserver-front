import { Header } from "../Header";
import * as S from "./styles";

import { CardView } from "../CardView";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ModalUserName } from "../Modal/ModalUsername";

export function InitialInfos() {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { userName } = useSelector((state: any) => state.user);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const images = {
    background: "https://i.ibb.co/LxgmhZM/background.jpg",
    background2: "https://i.ibb.co/NpQVfff/background2.jpg",
    background3: "https://i.ibb.co/YNV8tj9/background3.jpg",
    background4: "https://i.ibb.co/4FJ6Nxy/background4.jpg",
    background5: "https://i.ibb.co/Xjgn0K6/background5.jpg",
  };

  useEffect(() => {
    if (!!!userName) {
      setOpen(true);
    }
  }, []);

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
        autoPlaySpeed={3500}
      >
        <img
          src={images.background}
          alt="Background Site"
          style={{ display: "flex" }}
        />
        <img
          src={images.background2}
          alt="Background Site"
          style={{ display: "flex" }}
        />
        <img
          src={images.background3}
          alt="Background Site"
          style={{ display: "flex" }}
        />
        <img
          src={images.background4}
          alt="Background Site"
          style={{ display: "flex" }}
        />
        <img
          src={images.background5}
          alt="Background Site"
          style={{ display: "flex" }}
        />
      </S.ChangedCarousel>
      <div className="contents">
        <CardView />
        <Header className="main-nav" transparent={scrollPosition} />
      </div>
      <ModalUserName isOpen={open} onRequestClose={handleClose} />
    </S.MainSection>
  );
}
