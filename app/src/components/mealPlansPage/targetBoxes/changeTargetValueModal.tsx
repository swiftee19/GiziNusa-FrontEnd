import { useEffect, useState } from "react";

interface ChangeTargetValueModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  icon: string;
  target: string;
  targetValue: string;
  changeTargetFunction?: (newTargetValue: number) => void;
}

export default function ChangeTargetValueModal({
  isModalOpen,
  closeModal,
  icon,
  target,
  targetValue,
  changeTargetFunction,
}: ChangeTargetValueModalProps) {
  const [
    initialReceivedTargetValueNumber,
    setinitialReceivedTargetValueNumber,
  ] = useState(targetValue.split(" ")[0]);
  const [
    initialReceivedTargetValueMetric,
    setinitialReceivedTargetValueMetric,
  ] = useState(targetValue.split(" ")[1]);

  const [modalTargetValue, setmodalTargetValue] = useState<string>(
    initialReceivedTargetValueNumber
  );

  const updateTargetValue = () => {
    if (!changeTargetFunction) return;

    changeTargetFunction(Number(modalTargetValue));
    closeModal();
  };

  useEffect(() => {
    setinitialReceivedTargetValueNumber(targetValue.split(" ")[0]);
    setinitialReceivedTargetValueMetric(targetValue.split(" ")[1]);
    setmodalTargetValue(targetValue.split(" ")[0]);
  }, [targetValue]);

  return (
    <>
      {isModalOpen && (
        <div className="fixed left-0 top-0 w-screen h-screen z-10 flex items-center justify-center bg-thinOverlay">
          <div className="relative w-1/5 flex flex-col gap-2 bg-white p-4 rounded-xl">
            <img
              className="absolute -top-2 -right-2 size-6 bg-offwhite rounded-full hover:cursor-pointer"
              src="/mealPlansPage/targetBoxes/close_icon.svg"
              alt="close icon"
              onClick={() => {
                closeModal();
              }}
            />
            <div className="flex gap-2 items-center">
              <img className="size-14" src={icon} alt="target icon" />
              <h2 className="text-gray">{target}</h2>
            </div>
            <div className="w-full flex items-center gap-2">
              <input
                className="px-4 py-1 rounded-full w-full border border-solid border-gray bg-offwhite focus:outline-none text-lg"
                value={modalTargetValue}
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");
                  setmodalTargetValue(numericValue);
                }}
              />
              <p className="text-lg pr-4">{initialReceivedTargetValueMetric}</p>
            </div>
            <button
              className="btn-primary w-full py-2 px-4"
              onClick={() => {
                updateTargetValue();
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}
