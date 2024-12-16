import { IconType } from "react-icons/lib";

export interface profileViewType {
  id?: number;
  logo?: string;
  name?: string;
  tagline?: string;
  insideData?: {
    id: number;
    heading: string;
    Icon: IconType;
    subheading: string;
  }[];
}
