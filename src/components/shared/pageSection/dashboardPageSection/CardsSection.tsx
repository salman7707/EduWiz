import Cards from "@/components/template/cards/Cards";
import DashboardCard from "@/lib/DashboardCard";
import React from "react";

export default function CardsSection() {
  return (
    <div className="lg:w-full px-9 pt-12 pb-8">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-9">
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
