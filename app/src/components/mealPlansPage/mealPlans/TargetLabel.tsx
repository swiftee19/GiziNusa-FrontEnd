import { TargetLabelEnum, TargetLabelUnitEnum } from "../../../typesEnumsInterfaces/targetLabel";

export interface TargetLabelProps {
  targetLabel: TargetLabelEnum;
  value: number;
  unit: TargetLabelUnitEnum;
}

export default function TargetLabel({
  targetLabel,
  value,
  unit,
}: TargetLabelProps) {
  const unitString = unit === TargetLabelUnitEnum.G ? "gr" : "kcal";

  return (
    <>
      {targetLabel === TargetLabelEnum.KARBO && (
        <div className="w-fit h-fit rounded-xl p-2 bg-lightblue">
          <p className="text-blue">
            {value} {unitString}
          </p>
        </div>
      )}
      {targetLabel === TargetLabelEnum.PROTEIN && (
        <div className="w-fit h-fit rounded-xl p-2 bg-lightgreen">
          <p className="text-green">{value} {unitString}</p>
        </div>
      )}
      {targetLabel === TargetLabelEnum.KALORI && (
        <div className="w-fit h-fit rounded-xl p-2 bg-lightyellow">
          <p className="text-yellow">{value} {unitString}</p>
        </div>
      )}
    </>
  );
}
