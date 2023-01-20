import styled, {css} from "styled-components"
import { IChips } from "./types"
import { colors } from "../../utils/colors";

export const Chip = styled.span<IChips>`
    background-color: green;
    width: fit-content;
    padding: 0.3rem 0.4rem 0.3rem 0.4rem;
    border-radius: 10px;
    font-family: 'Bebas Neue';
    display: flex;
    align-items: center;
    gap: 0.3rem;

    ${({background, fontColor}) => 
        css`
            background: ${background || `${colors.primary["0.2"]}`};
            color: ${fontColor || `${colors.texts[0]}`};
        `
    }
`