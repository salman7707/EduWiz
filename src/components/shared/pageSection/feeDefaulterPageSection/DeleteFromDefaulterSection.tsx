import ExsistedCard from "@/components/template/cards/ExsistedCard";
import FeeDefaulters from "@/lib/FeeDefaulter";
import React from "react";
import AddBalanceorClearListCard from "@/components/template/cards/AddBalanceorClearListCard";

export default function DeleteFromDefaulterSection() {
  return (
    <div className="mt-8 flex flex-wrap gap-y-4 items-start gap-x-5 md:px-0 px-5">
      {FeeDefaulters.map((data) => (
        <div key={data.id}>
          <ExsistedCard
            name={data.name}
            regno={data.registerationno}
            subject={data.subject}
            src={data.img}
            feePage={true}
          />
        </div>
      ))}
      <AddBalanceorClearListCard />
    </div>
  );
}
