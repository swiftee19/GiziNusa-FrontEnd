import { useState } from "react";
import ChangeValueModal from "./ChangeValueModal";

interface InfographicBoxProps {
  title: string;
  value: string;
  icon: string;
  changeValueFunction?: (newValue: string) => void;
}

export default function InfographicBox({
  title,
  value,
  icon,
  changeValueFunction,
}: InfographicBoxProps) {
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setisModalOpen(() => true);
  };

  const closeModal = () => {
    setisModalOpen(() => false);
  };

  return (
    <>
      <ChangeValueModal closeModal={closeModal} icon={icon} isModalOpen={isModalOpen} title={title} value={value} changeValueFunction={changeValueFunction} />
      <div className="col-span-1 flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-solid border-lightgray relative">
        {changeValueFunction && (
          <img
            className="size-4 absolute top-2 right-2 hover:cursor-pointer"
            src="/mealPlansPage/targetBoxes/edit_icon.svg"
            alt="edit icon"
            onClick={() => {
              openModal();
            }}
          />
        )}
        <img className="size-10 2xl:size-16" src={icon} alt="icon" />
        <div className="flex flex-col">
          <p className="text-xl font-bold">{value}</p>
          <p className="text-black">{title}</p>
        </div>
      </div>
    </>
  );
}
