import CardsSection from "@/components/shared/pageSection/dashboardPageSection/CardsSection";
import OtherCardsSection from "@/components/shared/pageSection/dashboardPageSection/OtherCardsSection";
import React from "react";

export default function page() {
  return <div className="w-full pb-6">
    <CardsSection/>
    <OtherCardsSection/>
  </div>;
}
