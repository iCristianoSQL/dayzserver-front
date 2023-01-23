import styled, {css} from "styled-components";
import { colors } from "../../utils/colors";
import { IHeader } from "./types";

export const Header = styled.header<IHeader>`
    width: 100%;
    height: 100px;
    transition: 0.2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 3rem;

    img {
        height: 80%;
    }

    nav {
        ul {
            display: flex;
            gap: 1.8rem;

            .listed-by-mapping {

                &:hover {
                    color: ${colors.danger[0]};
                    border-bottom: 1px solid  ${colors.danger[0]};
                    transition: 0.3s;
                }
            }

            .nav-user-profille {
                display: flex;
                align-items: center;
                gap: 0.2rem;
                border: 1px solid ${colors.primary[0]};
                border-radius: 3px;
                padding: 0.3rem;

                svg {
                    fill: ${colors.danger[0]};
                }
            }

            li {
                color: ${colors.primary[0]};
                font-size: 1.1rem;
                cursor: pointer;
            }
        }

    }

    ${({transparent}) => 
        css`
            background: ${transparent === 0 ? `${colors.secondary["0.2"]}` : `${colors.secondary[0]}`};
        `
    }
`