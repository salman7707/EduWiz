import AddNewButtonCard from "@/components/template/cards/AddNewButtonCard";
import ClassMarksCard from "@/components/template/cards/ClassesMarksCard";
import React from "react";

export default function AddNewAndExsistedClassSection() {
  return (
    <div className="flex md:flex-row flex-col items-start gap-x-4 gap-y-4 py-4 w-full">
      <div className="xl:w-[15%] md:w-[25%] w-full">
        <ClassMarksCard
          classname="computer"
          totalsubjects={1}
          totalmarks={10}
        />
      </div>
      <div className="md:w-[15%] w-full">
        <AddNewButtonCard url="/assign_subjects" />
      </div>
    </div>
  );
}
