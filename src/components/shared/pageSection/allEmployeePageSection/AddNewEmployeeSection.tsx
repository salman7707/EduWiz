import AddNewButtonCard from "@/components/template/cards/AddNewButtonCard";
import ExsistedCard from "@/components/template/cards/ExsistedCard";
import ExsistedEmployeeData from "@/lib/ExsistedStudent";
import React from "react";

export default function AddNewEmployeeSection() {
  return (
    <div>
      <div className="py-4 flex items-start justify-start px-3 gap-x-6">
        {ExsistedEmployeeData.map((data) => (
          <div key={data.id}>
            <ExsistedCard name={data.name} role={data.role} src={data.img} />
          </div>
        ))}
        <AddNewButtonCard url="/add_employee" />
      </div>
    </div>
  );
}
