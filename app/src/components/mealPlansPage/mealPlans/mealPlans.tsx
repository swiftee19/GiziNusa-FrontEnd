import { useEffect, useState } from "react";
import MealPlanTableHeader from "./MealPlanTableHeader";
import MealPlanTableRow, { MealPlanTableRowProps } from "./MealPlanTableRow";
import { testMealPlanData } from "./dummyMealPlansData";

export default function MealPlans() {
  const [dummyMealPlanData, setDummyMealPlanData] =
    useState<MealPlanTableRowProps[]>(testMealPlanData);

  const [isPacketSortDescending, setIsPacketSortDescending] =
    useState<boolean>(true);
  const [isPriceSortDescending, setIsPriceSortDescending] =
    useState<boolean>(true);
  const [isCarbohydratesSortDescending, setIsCarbohydratesSortDescending] =
    useState<boolean>(true);
  const [isProteinSortDescending, setIsProteinSortDescending] =
    useState<boolean>(true);
  const [isCaloriesSortDescending, setIsCaloriesSortDescending] =
    useState<boolean>(true);

  const resetAllSorts = () => {
    setIsPacketSortDescending(true);
    setIsPriceSortDescending(true);
    setIsCarbohydratesSortDescending(true);
    setIsProteinSortDescending(true);
    setIsCaloriesSortDescending(true);
  };

  const switchPacketSort = () => {
    resetAllSorts();
    setIsPacketSortDescending(!isPacketSortDescending);
  };

  const switchPriceSort = () => {
    resetAllSorts();
    setIsPriceSortDescending(!isPriceSortDescending);
  };

  const switchCarbohydratesSort = () => {
    resetAllSorts();
    setIsCarbohydratesSortDescending(!isCarbohydratesSortDescending);
  };

  const switchProteinSort = () => {
    resetAllSorts();
    setIsProteinSortDescending(!isProteinSortDescending);
  };

  const switchCaloriesSort = () => {
    resetAllSorts();
    setIsCaloriesSortDescending(!isCaloriesSortDescending);
  };

  useEffect(() => {
    const sortedData = [...dummyMealPlanData].sort((a, b) => {
      if (isPacketSortDescending) {
        return a.packetName.localeCompare(b.packetName);
      } else {
        return b.packetName.localeCompare(a.packetName);
      }
    });
    setDummyMealPlanData(sortedData);
  }, [isPacketSortDescending, dummyMealPlanData]);

  useEffect(() => {
    const sortedData = [...dummyMealPlanData].sort((a, b) => {
      if (isPriceSortDescending) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setDummyMealPlanData(sortedData);
  }, [isPriceSortDescending, dummyMealPlanData]);

  useEffect(() => {
    const sortedData = [...dummyMealPlanData].sort((a, b) => {
      if (isCarbohydratesSortDescending) {
        return a.targetKarbo - b.targetKarbo;
      } else {
        return b.targetKarbo - a.targetKarbo;
      }
    });
    setDummyMealPlanData(sortedData);
  }, [isCarbohydratesSortDescending, dummyMealPlanData]);

  useEffect(() => {
    const sortedData = [...dummyMealPlanData].sort((a, b) => {
      if (isProteinSortDescending) {
        return a.targetProtein - b.targetProtein;
      } else {
        return b.targetProtein - a.targetProtein;
      }
    });
    setDummyMealPlanData(sortedData);
  }, [isProteinSortDescending, dummyMealPlanData]);

  useEffect(() => {
    const sortedData = [...dummyMealPlanData].sort((a, b) => {
      if (isCaloriesSortDescending) {
        return a.targetKalori - b.targetKalori;
      } else {
        return b.targetKalori - a.targetKalori;
      }
    });
    setDummyMealPlanData(sortedData);
  }, [isCaloriesSortDescending, dummyMealPlanData]);

  return (
    <>
      <div className="w-full h-full bg-white rounded-xl border-2 border-solid border-lightgray p-4 flex flex-col gap-2">
        <div className="w-full flex gap-2 items-center justify-start">
          <img className="size-8" src="/ai_icon.svg" alt="AI Icon" />
          <h2 className="text-boldgray">Meal Plans</h2>
        </div>
        {/* meal plan table */}
        <div className="w-full h-fit grid grid-cols-12 gap-2 bg-white">
          <MealPlanTableHeader
            isCaloriesSortDescending={isCaloriesSortDescending}
            isCarbohydratesSortDescending={isCarbohydratesSortDescending}
            isPacketSortDescending={isPacketSortDescending}
            isPriceSortDescending={isPriceSortDescending}
            isProteinSortDescending={isProteinSortDescending}
            switchCaloriesSort={switchCaloriesSort}
            switchCarbohydratesSort={switchCarbohydratesSort}
            switchPacketSort={switchPacketSort}
            switchPriceSort={switchPriceSort}
            switchProteinSort={switchProteinSort}
          />
          {/* divider */}
          <span className="col-span-11 h-[0.125rem] bg-lightgray" />
          {/* data */}
          <div className="col-span-12 grid grid-cols-12 gap-2 bg-white max-h-[33vh] overflow-y-auto">
            {dummyMealPlanData.map((mealPlan) => {
              return <MealPlanTableRow {...mealPlan} />;
            })}
          </div>
        </div>
        {/* add custom meal button */}
        <div className="w-full h-fit flex mt-auto">
          <button className="border-none bg-white text-lg text-blue px-4 py-1 rounded-xl transition duration-300 hover:cursor-pointer hover:bg-blue hover:text-white ">
            + Custom
          </button>
        </div>
      </div>
    </>
  );
}
