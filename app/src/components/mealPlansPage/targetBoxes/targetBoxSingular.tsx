export interface TargetBoxSingularProps {
  icon: string;
  target: string;
  targetValue: string;
  changeTargetFunction?: (newTargetValue: number) => void;
}

export default function TargetBoxSingular({
  icon,
  target,
  targetValue,
  changeTargetFunction,
}: TargetBoxSingularProps) {
  return (
    <>
      <div className="relative w-fit h-fit p-4 pr-6 rounded-xl flex flex-col items-start justify-start bg-white border-2 border-solid border-lightgray">
        {changeTargetFunction && (
          <img
            className="size-4 absolute top-2 right-2 hover:cursor-pointer"
            src="/mealPlansPage/targetBoxes/edit_icon.svg"
            alt="edit icon"
          />
        )}
        <img className="size-10" src={icon} alt="target icon" />
        <h3 className="text-gray">{target}</h3>
        <h1 className="text-black">{targetValue}</h1>
      </div>
    </>
  );
}
