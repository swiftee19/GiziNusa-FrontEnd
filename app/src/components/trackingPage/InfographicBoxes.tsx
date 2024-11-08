import { useState } from "react";
import InfographicBox from "./InfographicBox";

export default function InfographicBoxes() {
  const [anggaran, setAnggaran] = useState<string>("44 miliar");
  const targetOrang = "1.500.000";
  const rataRataPendapatanPerKapita = "76.000.000";

  const infographicBoxDummyData = [
    {
      title: "Anggaran",
      value: anggaran,
      icon: "/trackingPage/money_icon.svg",
      changeValueFunction: setAnggaran,
    },
    {
      title: "Target Orang",
      value: targetOrang,
      icon: "/trackingPage/people_icon.svg",
    },
    {
      title: "Rata-rata Pendapatan Per Kapita",
      value: rataRataPendapatanPerKapita,
      icon: "/trackingPage/income_icon.svg",
    },
  ];
  return (
    <>
      <div className="w-full h-fit grid grid-cols-3 gap-4">
        {infographicBoxDummyData.map((infographicBoxData, index) => (
          <InfographicBox
            key={index}
            title={infographicBoxData.title}
            value={infographicBoxData.value}
            icon={infographicBoxData.icon}
            changeValueFunction={infographicBoxData.changeValueFunction}
          />
        ))}
      </div>
    </>
  );
}
