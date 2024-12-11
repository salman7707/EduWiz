import AddNewButtonCard from "@/components/template/cards/AddNewButtonCard";
import ExsistedstudentCard from "@/components/template/cards/ExsistedstudentCard";
import ExsistedStudent from "@/lib/ExsistedStudents";
import React from "react";

export default function AddNewStudentSection() {
  return (
    <div className="py-4 flex items-start justify-start px-3 gap-x-6">
      {ExsistedStudent.map((data) => (
        <div key={data.id}>
          <ExsistedstudentCard
            name={data.name}
            regno={data.registerationno}
            src={data.img}
          />
        </div>
      ))}
      <AddNewButtonCard />
    </div>
  );
}
