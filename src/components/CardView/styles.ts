import styled, { keyframes } from "styled-components"
import { motion } from 'framer-motion'

export const image = keyframes`
  0% { margin-inline-start: 0px; }
  10% { margin-inline-start: 2px; }
  20% { margin-inline-start: 4px; }
  30% { margin-inline-start: 6px; }
  40% { margin-inline-start: 8px; }
  50% { margin-inline-start: 10px; }
  60% { margin-inline-start: 8px; }
  70% { margin-inline-start: 6px; }
  80% { margin-inline-start: 4px; }
  90% { margin-inline-start: 2px; }
  100% { margin-inline-start: 0px; }
`

export const Card = styled.div`
    width: 20rem;
    height: 20rem;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;

    display: flex;
    flex-direction: column;

    .chips-box {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        align-items: center;
        
        margin-top: 0.3rem;
    }
`

export const Image = styled(motion.img)`
    width: 50%;
    align-self: center;
    animation: ${image} 1s linear infinite;
    border-radius: 100%;
`