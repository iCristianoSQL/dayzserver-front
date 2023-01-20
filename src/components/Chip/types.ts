import {ReactNode} from "react"

export interface IChips {
    text?: string;
    limit?: number;
    children: ReactNode;
    background?: string;
    fontColor?: string;
}