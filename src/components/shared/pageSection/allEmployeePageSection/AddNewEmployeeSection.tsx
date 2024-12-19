import AddNewButtonCard from "@/components/template/cards/AddNewButtonCard";
import ExsistedCard from "@/components/template/cards/ExsistedCard";
import ExsistedEmployeeData from "@/lib/ExsistedStudent";
import React from "react";

export default function AddNewEmployeeSection() {
  return (
    <div>
      <div className="py-4 flex flex-wrap items-start justify-start px-3 gap-x-6 gap-y-3">
        {ExsistedEmployeeData.map((data) => (
          <div key={data.id}>
            <ExsistedCard name={data.name} role={data.role} src={data.img} />
          </div>
        ))}
        {/* <div className="xl:w-[15%] md:w-[20%] xss:w-[40%] xs:w-[50%]">
        </div> */}
        <AddNewButtonCard url="/add_employee" />
      </div>
    </div>
  );
}
