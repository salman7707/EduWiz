import React from "react";
import AddNewButtonCard from "@/components/template/cards/AddNewButtonCard";
import ClassCard from "@/components/template/cards/ClassCard";
import allClassesData from "@/lib/allClasses";
import ClassPercentageData from "@/lib/ClassPercentageData";
export default function ClassesAndHeading() {
  return (
    <div className="w-auto flex md:flex-row flex-col gap-y-5 items-start mt-6 gap-x-8">
      {allClassesData.map((data) => (
        <div key={data.id} className="xl:w-[22%] lg:w-[25%] md:w-auto w-full">
          <ClassCard
            classname={data.classname}
            totalStudents={data.totalStudents}
            percentageData={ClassPercentageData}
          />
        </div>
      ))}
      <div className="xl:w-[15%] lg:w-[20%] md:w-[20%] w-full">
        <AddNewButtonCard url="/add_new_classes" />
      </div>
    </div>
  );
}
