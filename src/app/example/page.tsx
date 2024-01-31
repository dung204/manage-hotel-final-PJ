"use client";
import BarChart from "@/components/BarChart/BarChart";
import useGetExample from "@/features/example/useGetExample";
import React from "react";
const Example = () => {
  const { data } = useGetExample();

  console.log("data", data);

  return (
    <div>
      <BarChart
        dataBar1={[1, 2, 3, 4]}
        dataLine={[5, 6, 7, 8, 9]}
        dataBar2={[1, 2, 3, 6]}
        labels={["hello", "world"]}
      />
    </div>
  );
};

export default Example;
