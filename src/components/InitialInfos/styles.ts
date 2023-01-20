import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { IMainImage } from "./types";

export const MainSection = styled.section`
    height: 100vh;
    width: 100vw;
    position: relative;

    .main-image {
        width: 100%;
        filter: grayscale(1);
    }

    .main-nav {
        position: fixed;
    }

    .contents {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`

export const ChangedCarousel = styled(Carousel)`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  position: absolute;
  .rec-slider-container {
    margin: 0px !important;
  }

  .rec-pagination {
    display: none;
  }
`;