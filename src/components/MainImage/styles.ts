import styled from "styled-components";
import { motion } from 'framer-motion'

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
        z-index: 1;
    }

    .contents {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`

export const Test = styled(motion.div)`
    height: 1000px;
    width: 50px;
    background-color: red;
`