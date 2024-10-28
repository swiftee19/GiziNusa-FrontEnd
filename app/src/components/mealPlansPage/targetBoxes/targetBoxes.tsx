import TargetBoxSingular, { TargetBoxSingularProps } from "./targetBoxSingular";

interface TargetBoxesProps {
  targetBoxes: TargetBoxSingularProps[];
}

export default function TargetBoxes({ targetBoxes }: TargetBoxesProps) {
  return (
    <>
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
        {targetBoxes.map((targetBoxData: TargetBoxSingularProps) => (
          <TargetBoxSingular
            key={targetBoxData.target}
            icon={targetBoxData.icon}
            target={targetBoxData.target}
            targetValue={targetBoxData.targetValue}
            changeTargetFunction={targetBoxData.changeTargetFunction}
          />
        ))}
      </div>
    </>
  );
}
