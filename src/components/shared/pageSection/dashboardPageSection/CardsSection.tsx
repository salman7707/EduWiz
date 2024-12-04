import Cards from "@/components/template/cards/Cards";
import DashboardCard from "@/lib/DashboardCard";
import React from "react";

export default function CardsSection() {
  return (
    <div className="w-full px-9 pt-12 pb-8">
      <div className="grid grid-cols-4 gap-9">
        {DashboardCard.map((data, index) => (
          <div key={index}>
            <Cards
              color={data.color}
              heading={data.heading}
              icon={data.icon}
              number={data.number}
              subheading={data.subheading}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
