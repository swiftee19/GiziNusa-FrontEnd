import RiskLabel from "./RiskLabel";

export interface StuntingRiskRowProps {
  region: string;
  risk: string;
  packet: string;
  price: string;
}

export default function StuntingRiskRow({
  region,
  risk,
  packet,
  price,
}: StuntingRiskRowProps) {
  const priceReformatted = price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <>
      <div className="w-full h-fit col-span-4 grid grid-cols-4">
        <p className="text-lg text-black break-all pr-1">{region}</p>
        <RiskLabel risk={risk} />
        <p className="text-lg text-black break-all pr-1">{packet}</p>
        <p className="text-lg text-black break-all pr-1">Rp {priceReformatted}</p>
      </div>
    </>
  );
}
