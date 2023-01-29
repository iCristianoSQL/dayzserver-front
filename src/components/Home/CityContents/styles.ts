import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Infos = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    position: relative;
    overflow: hidden;

    img {
        width: 35rem;
    }

    ul {
        position: absolute;
        bottom: 30%;
        li {
            margin-top: 1.5rem;
            font-weight: 500;

            &:before {content: "| "; color: ${colors.valid[0]};;}
        }
    }
    .box-content-one {
        left: 25px;
    }

    .box-content-two {
        right: 25px;
    }
`