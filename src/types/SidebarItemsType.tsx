import { LucideIcon } from "lucide-react";

export interface SideBaritemstypes {
  id: number;
  title: string;
  url: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  plusicon?: boolean;
  insidedata?: {
    id: number;
    title: string;
    url: string;
  }[];
}
