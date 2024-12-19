import AddNewButtonCard from "@/components/template/cards/AddNewButtonCard";
import ExsistedCard from "@/components/template/cards/ExsistedCard";
import ExsistedStudent from "@/lib/ExsistedStudents";
import React from "react";

export default function AddNewStudentSection() {
  return (
    <div className="py-4 flex flex-wrap gap-y-4 items-start justify-start px-3 gap-x-6">
      {ExsistedStudent.map((data) => (
        <div key={data.id}>
          <ExsistedCard
            name={data.name}
            regno={data.registerationno}
            src={data.img}
          />
        </div>
      ))}
      <AddNewButtonCard url="/add_new_student" />
    </div>
  );
}
