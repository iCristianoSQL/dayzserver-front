import styled, {css} from "styled-components";
import { colors } from "../../utils/colors";
import { INavBar } from "./types";

export const Nav = styled.nav<INavBar>`
    width: 100%;
    height: 100px;
    transition: 0.2s;

    ${({transparent}) => 
        css`
            background: ${transparent === 0 ? `${colors.secondary["0.2"]}` : `${colors.secondary[0]}`};
        `
    }
`