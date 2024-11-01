import { BarChart } from "@mui/x-charts";

export default function RiskMatrixGraph() {
  const dataset = [
    { region: "DKI Jakarta", value: 29 },
    { region: "Jawa Barat", value: 41 },
    { region: "Jawa Timur", value: 41 },
    { region: "Jawa Tengah", value: 90 },
  ];

  return (
    <>
      <div className="flex flex-col p-4 bg-white rounded-xl w-full h-full border-2 border-solid border-lightgray">
        <h2 className="text-boldgray">Matriks Risiko per Wilayah</h2>
        <BarChart
          height={300}
          dataset={dataset}
          title="Matriks Risiko per Wilayah"
          xAxis={[
            {
              id: "barCategories",
              dataKey: "region",
              scaleType: "band",
            },
          ]}
          yAxis={[
            {
              id: "valueAxis",
              min: 0,
              max: 100, // Set y-axis range from 0 to 100
            },
          ]}
          series={[
            {
              label: "2024", // Label for legend
              dataKey: "value",
              color: "#605BFF", // Set bar color to purple
            },
          ]}
          slotProps={{
            legend: {
              direction: "row",
              position: {
                vertical: "bottom",
                horizontal: "middle",
              },
              padding: {
                top: 80,
              },
            },
          }}
        />
      </div>
    </>
  );
}
