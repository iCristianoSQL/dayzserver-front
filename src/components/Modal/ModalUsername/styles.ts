import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled(motion.section)`
height: 350px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

img {
    width: 150px;
    height: 150px;
}

p, strong {
    color: ${colors.primary[0]};
    text-align: center;
}

input {
    margin-top: 1rem;
}
`