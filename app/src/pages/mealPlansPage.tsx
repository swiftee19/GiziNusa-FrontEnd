import { useEffect, useState } from "react";
import SearchBar from "../components/mealPlansPage/searchBar/searchBar";
import TargetBoxes from "../components/mealPlansPage/targetBoxes/targetBoxes";
import { TargetBoxSingularProps } from "../components/mealPlansPage/targetBoxes/targetBoxSingular";

export default function MealPlansPage() {
  const [targetKarbo, setTargetKarbo] = useState<number>(60);
  const [targetProtein, setTargetProtein] = useState<number>(60);
  const [targetKalori, setTargetKalori] = useState<number>(60);
  const [mealDiterima, setMealDiterima] = useState<number>(70);

  const [targetBoxesData, settargetBoxesData] = useState<TargetBoxSingularProps[]>([])

  useEffect(() => {
    settargetBoxesData([
      {
        icon: "/mealPlansPage/targetBoxes/target_karbo.svg",
        target: "Target Karbo",
        targetValue: `${targetKarbo} g`,
        changeTargetFunction: (e)=>{setTargetKarbo(e)}
      },
      {
        icon: "/mealPlansPage/targetBoxes/target_protein.svg",
        target: "Target Protein",
        targetValue: `${targetProtein} g`,
        changeTargetFunction: (e)=>{setTargetProtein(e)}
      },
      {
        icon: "/mealPlansPage/targetBoxes/target_kalori.svg",
        target: "Target Kalori",
        targetValue: `${targetKalori} kcal`,
        changeTargetFunction: (e)=>{setTargetKalori(e)}
      },
      {
        icon: "/mealPlansPage/targetBoxes/meal_diterima.svg",
        target: "Meal Diterima",
        targetValue: `${mealDiterima} %`
      }
    ])
  }, [targetKarbo, targetProtein, targetKalori, mealDiterima])
  
  

  return (
    <>
      <div className="w-full h-full bg-offwhite flex flex-col gap-4 py-8 pl-4">
        <SearchBar />
        <div className="flex">
          <div className="w-fit h-fit">
            <TargetBoxes targetBoxes={targetBoxesData} />
          </div>
          {/* graph matriks risiko per wilayah */}
        </div>
      </div>
    </>
  );
}
