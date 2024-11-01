import StuntingRiskRow, { StuntingRiskRowProps } from "./StuntingRiskRow";

interface StuntingRiskRowsProps {
    stuntingRiskRowData: StuntingRiskRowProps[];
  }

function StuntingRiskRows({stuntingRiskRowData}: StuntingRiskRowsProps) {
  return (
    <>
      <div className="grid col-span-4 gap-4 w-full max-h-[33vh] overflow-y-auto">
        {stuntingRiskRowData.map((data, index) => (
          <StuntingRiskRow
            packet={data.packet}
            price={data.price}
            region={data.region}
            risk={data.risk}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default StuntingRiskRows;
