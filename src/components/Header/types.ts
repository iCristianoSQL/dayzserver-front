export interface IHeader {
    className?: string
    transparent?: number;
}

export interface IList {
    id: number;
    name: string;
    route: () => void;
  }