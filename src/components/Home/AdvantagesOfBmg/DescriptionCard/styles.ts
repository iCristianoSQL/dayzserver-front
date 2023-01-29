import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Container = styled.div`
    height: fit-content;
    min-height: 260px;
    width: 220px;
    background: radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 7px, transparent 7px) 0% 0%/10px 10px no-repeat,
            radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 7px, transparent 7px) 100% 0%/10px 10px no-repeat,
            radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 7px, transparent 7px) 0% 100%/10px 10px no-repeat,
            radial-gradient(circle at 0 0, #ffffff 0, #ffffff 7px, transparent 7px) 100% 100%/10px 10px no-repeat,
            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 6px) calc(100% - 20px) no-repeat,
            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 20px) calc(100% - 6px) no-repeat,
            linear-gradient(0deg, #ff0000 0%, rgba(255,255,255,1) 96%, #ffffff 100%, rgba(0,0,0,1) 100%);
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    .box-icon {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            fill: ${colors.secondary[0]};
            font-size: 3.5rem;
            margin: 0 auto;
            &:hover {
                fill: ${colors.danger[0]};
                transition: 0.5s;
                font-size: 4rem;
            }
        }
    }

    p {
        margin-top: 5px;
        padding: 0 5px;
    }
`