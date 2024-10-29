import { useState } from "react";
import ChangeTargetValueModal from "./changeTargetValueModal";

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
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setisModalOpen(() => true);
  };

  const closeModal = () => {
    setisModalOpen(() => false);
  };

  return (
    <>
      <div className="relative h-fit p-4 pr-6 rounded-xl flex flex-col items-start justify-start bg-white border-2 border-solid border-lightgray w-full">
        {changeTargetFunction && (
          <img
            className="size-4 absolute top-2 right-2 hover:cursor-pointer"
            src="/mealPlansPage/targetBoxes/edit_icon.svg"
            alt="edit icon"
            onClick={() => {
              openModal();
            }}
          />
        )}
        <img className="size-10" src={icon} alt="target icon" />
        <h3 className="text-gray">{target}</h3>
        <h1 className="text-black">{targetValue}</h1>
      </div>

      <ChangeTargetValueModal
        closeModal={closeModal}
        icon={icon}
        isModalOpen={isModalOpen}
        target={target}
        targetValue={targetValue}
        changeTargetFunction={changeTargetFunction}
      />
    </>
  );
}
