import styled from "styled-components"
import { motion } from 'framer-motion'

export const Card = styled.div`
    width: 20rem;
    height: 20rem;
    background: red;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;

    display: flex;
    flex-direction: column;
`

export const Image = styled(motion.img)`
    width: 80%;
    align-self: center;
`