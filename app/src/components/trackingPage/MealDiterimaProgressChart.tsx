import { Chart } from "react-google-charts";

const data = [
  ["MealDiterimaStatus", "Percentage"],
  ["Diterima", 8021],
  ["Belum diterima", 2391],
];

const options = {
  pieHole: 0.6,

  pieSliceTextStyle: {
    color: "black",
  },
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "black",
      fontSize: 16,
    },
  },
  slices: {
    0: { color: "#5B93FF" },
    1: { color: "#FFD66B" },
  },
};

export default function MealDiterimaProgressChart() {
  return (
    <>
      <div className="w-1/4 h-fit p-4 bg-white rounded-xl flex flex-col relative">
        <h2 className="text-gray">Meal Diterima</h2>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
      </div>
    </>
  );
}
