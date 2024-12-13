import React from "react";
import AddNewButtonCard from "@/components/template/cards/AddNewButtonCard";
import ClassCard from "@/components/template/cards/ClassCard";
import allClassesData from "@/lib/allClasses";
export default function ClassesAndHeading() {
  return (
    <div className="w-auto flex items-start mt-6 gap-x-8">
      {allClassesData.map((data) => (
        <div key={data.id}>
          <ClassCard
            classname={data.classname}
            totalStudents={data.totalStudents}
            boys={data.boys}
            boysPercentage={data.boysPercentage}
            girls={data.girls}
            grilsPercentage={data.grilsPercentage}
            na={data.na}
            naPercentage={data.naPercentage}
          />
        </div>
      ))}
      <AddNewButtonCard url="/add_new_classes" />
    </div>
  );
}
