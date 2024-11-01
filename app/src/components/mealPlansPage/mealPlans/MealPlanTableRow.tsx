import { TargetLabelEnum, TargetLabelUnitEnum } from "../../../typesEnumsInterfaces/targetLabel";
import { foodIngredient } from "../../mealPlan/foodIngredient";
import TargetLabel from "./TargetLabel";

export interface MealPlanTableRowProps {
  packetName: string;
  price: number;
  foodIngredients: foodIngredient[];
  targetKarbo: number;
  targetProtein: number;
  targetKalori: number;
}

export default function MealPlanTableRow() {
  return (
    <>
      <div className="col-span-6 grid grid-cols-3 gap-2">
        <p>Paket 1</p>
        <p>Rp 560.000</p>
        <div className="flex flex-col">
          <p>Beras - 20 Kg</p>
          <p>Beras - 20 Kg</p>
          <p>Beras - 20 Kg</p>
        </div>
      </div>
      <div className="col-span-5 grid grid-cols-3 gap-2">
        <TargetLabel targetLabel={TargetLabelEnum.KARBO} value={5.848} unit={TargetLabelUnitEnum.G}/>
        <TargetLabel targetLabel={TargetLabelEnum.PROTEIN} value={1.284} unit={TargetLabelUnitEnum.G} />
        <TargetLabel targetLabel={TargetLabelEnum.KALORI} value={42.210} unit={TargetLabelUnitEnum.KCAL} />
      </div>
      <div className="col-span-1 flex justify-center items-start">
        <input
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          type="radio"
          name="meal"
          aria-label="Select this meal plan"
        />
      </div>
    </>
  );
}
