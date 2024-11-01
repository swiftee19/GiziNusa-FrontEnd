import { useEffect, useState } from "react";
import SearchBar from "../components/mealPlansPage/searchBar/searchBar";
import TargetBoxes from "../components/mealPlansPage/targetBoxes/targetBoxes";
import { TargetBoxSingularProps } from "../components/mealPlansPage/targetBoxes/targetBoxSingular";
import RiskMatrixGraph from "../components/mealPlansPage/riskMatrixGraph/riskMatrixGraph";
import StuntingRiskGraph from "../components/mealPlansPage/stuntingRiskGraph/stuntingRiskGraph";
import MealPlans from "../components/mealPlansPage/mealPlans/mealPlans";

export default function MealPlansPage() {
  const [targetKarbo, setTargetKarbo] = useState<number>(60);
  const [targetProtein, setTargetProtein] = useState<number>(60);
  const [targetKalori, setTargetKalori] = useState<number>(60);
  const [mealDiterima, setMealDiterima] = useState<number>(70);

  const [targetBoxesData, settargetBoxesData] = useState<
    TargetBoxSingularProps[]
  >([]);

  useEffect(() => {
    settargetBoxesData([
      {
        icon: "/mealPlansPage/targetBoxes/target_karbo.svg",
        target: "Target Karbo",
        targetValue: `${targetKarbo} g`,
        changeTargetFunction: (e) => {
          setTargetKarbo(e);
        },
      },
      {
        icon: "/mealPlansPage/targetBoxes/target_protein.svg",
        target: "Target Protein",
        targetValue: `${targetProtein} g`,
        changeTargetFunction: (e) => {
          setTargetProtein(e);
        },
      },
      {
        icon: "/mealPlansPage/targetBoxes/target_kalori.svg",
        target: "Target Kalori",
        targetValue: `${targetKalori} kcal`,
        changeTargetFunction: (e) => {
          setTargetKalori(e);
        },
      },
      {
        icon: "/mealPlansPage/targetBoxes/meal_diterima.svg",
        target: "Meal Diterima",
        targetValue: `${mealDiterima} %`,
      },
    ]);
  }, [targetKarbo, targetProtein, targetKalori, mealDiterima]);

  return (
    <>
      <div className="w-full h-full bg-offwhite flex flex-col gap-4 py-8 px-4">
        <SearchBar />
        <div className="flex h-fit gap-2">
          <div className="min-w-[30vw] w-fit">
            <TargetBoxes targetBoxes={targetBoxesData} />
          </div>
          <div className="w-full h-fit">
            <RiskMatrixGraph />
          </div>
        </div>
        <div className="flex min-h-[40vh] h-full gap-2">
          <div className="min-w-[30vw] max-w-[30vw] h-full">
            <StuntingRiskGraph />
          </div>
          <div className="w-full h-full flex flex-col gap-1">
            <MealPlans />
            <button className="btn-primary w-fit ml-auto mt-auto text-lg font-bold px-14 py-1">
              Selesai
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
