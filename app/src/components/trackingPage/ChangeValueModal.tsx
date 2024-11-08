import { CurrencyUnit } from "@/typesEnumsInterfaces/currencyUnit";
import { log } from "console";
import { useState } from "react";

interface ChangeTargetValueModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  icon: string;
  title: string;
  value: string;
  changeValueFunction?: (newTargetValue: string) => void;
}

export default function ChangeValueModal({
  isModalOpen,
  closeModal,
  icon,
  title,
  value,
  changeValueFunction,
}: ChangeTargetValueModalProps) {
  const initialNumericValue = value.split(" ")[0];
  const initialCurrencyUnit = value.split(" ")[1] as CurrencyUnit;

  const [modalNumberValue, setModalNumberValue] =
    useState<string>(initialNumericValue);
  const [modalCurrencyUnit, setModalCurrencyUnit] =
    useState<string>(initialCurrencyUnit);

  const updateTargetValue = () => {
    if (!changeValueFunction) return;

    changeValueFunction(`${modalNumberValue} ${modalCurrencyUnit}`);

    closeModal();
  };

  console.log("modalNumberValue", modalNumberValue);
  console.log("modalCurrencyUnit", modalCurrencyUnit);
  
  

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
              <h2 className="text-black">{title}</h2>
            </div>
            <div className="w-full flex items-center gap-2">
              <input
                className="px-4 py-1 rounded-full w-1/3 border border-solid border-gray bg-offwhite focus:outline-none text-lg"
                value={modalNumberValue}
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  let numericValue = e.target.value.replace(/[^0-9.]/g, "");
                  if (numericValue.split(".").length > 2) {
                    numericValue = numericValue.slice(0, -1); // Remove the extra dot
                  }
                  setModalNumberValue(numericValue);
                }}
              />
              <select
                className="px-4 py-1 rounded-full w-2/3 border border-solid border-gray bg-offwhite focus:outline-none text-lg"
                value={modalCurrencyUnit}
                onChange={(e) => {
                  setModalCurrencyUnit(e.target.value as CurrencyUnit);
                }}
              >
                {Object.values(CurrencyUnit).map((currencyUnit) => (
                  <option key={currencyUnit} value={currencyUnit}>
                    {currencyUnit}
                  </option>
                ))}
              </select>
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
