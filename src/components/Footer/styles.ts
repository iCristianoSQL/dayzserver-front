import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    padding: 0px 3rem;
    background: ${colors.secondary[0]};
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 80%;
        border-radius: 100%;
    }

    div {
        height: 100%;
        display: flex;
        align-items: flex-end;

        span {
            color: ${colors.primary[0]};
        }
    }

    ul {
        display: flex;
        gap: 1.8rem;

        li {
            color: ${colors.primary[0]};
            cursor: pointer;
            font-size: 2.1rem;

            &:hover {
                svg{
                    fill: red !important;
                }
                    color: ${colors.danger[0]};
                    border-bottom: 1px solid  ${colors.danger[0]};
                    transition: 0.3s;
                }
        }
    }
`