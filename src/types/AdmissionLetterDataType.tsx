export interface admissionLetterDataType {
  id: number;
  img: string;
  name: string;
  insidedata?: {
    id: number;
    key: string;
    value: string;
    bg: string;
    color?: string;
  }[];
}
