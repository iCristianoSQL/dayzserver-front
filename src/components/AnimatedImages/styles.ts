import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { IAnimatedImageStyle } from "./types";

export const Image = styled(motion.img)<IAnimatedImageStyle>`
    ${({width, height, whiteAndBlack, position}) => 
        css`
            width: ${width || '100px'};
            height: ${height || '100px'};
            filter: grayscale(${whiteAndBlack === true ? 1 : 0})
            position: ${position || 'initial'};
        `
    }
`;
    