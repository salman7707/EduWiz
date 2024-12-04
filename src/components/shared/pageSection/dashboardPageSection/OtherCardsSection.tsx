import EsstimateFeeCard from "@/components/template/cards/EsstimateFeeCard";
import StatisticsCard from "@/components/template/cards/StatisticsCard";
import WellcomeAdminCard from "@/components/template/cards/WellcomeAdminCard";
import React from "react";
import IMAGES from "../../../../../public/images";
import SMScard from "@/components/template/cards/SMScard";
import ProgressCard from "@/components/template/cards/ProgressCard";
import DownloadVersionCard from "@/components/template/cards/DownloadVersionCard";
import CalenderCard from "@/components/template/cards/CalenderCard";
import StudentCountCard from "@/components/template/cards/StudentCountCard";

export default function OtherCardsSection() {
  return (
    <div className="px-9 h-full">
      <div className="grid grid-cols-[67%_31%] gap-5">
        <div className="space-y-7">
          <WellcomeAdminCard />
          <StatisticsCard heading={"Statistics"} src={IMAGES.GRAPH} />
          <StatisticsCard heading={"Statistics"} src={IMAGES.GRAPH2} />
          <StudentCountCard
            headingcolor="pink"
            heading="Today Absent Students"
          />
          <StudentCountCard
            headingcolor="blue"
            heading="Today Present Employees"
          />
          <StudentCountCard
            headingcolor="cardsecond"
            heading="New Admissions"
          />
        </div>
        <div className="space-y-7">
          <EsstimateFeeCard />
          <SMScard />
          <ProgressCard />
          <DownloadVersionCard />
          <CalenderCard />
        </div>
      </div>
    </div>
  );
}
