export interface PrintInfoBodyType {
  id: number;
  insideData?: {
    id?: number;
    data?: number | string;
  }[];
}
