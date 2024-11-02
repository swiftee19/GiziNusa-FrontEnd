import {
  TargetLabelEnum,
  TargetLabelUnitEnum,
} from "../../../typesEnumsInterfaces/targetLabel";
import { FoodIngredient } from "../../mealPlan/foodIngredient";
import TargetLabel from "./TargetLabel";

export interface MealPlanTableRowProps {
  packetName: string;
  price: number;
  foodIngredients: FoodIngredient[];
  targetKarbo: number;
  targetProtein: number;
  targetKalori: number;
}

export default function MealPlanTableRow({
  packetName,
  price,
  foodIngredients,
  targetKarbo,
  targetProtein,
  targetKalori,
}: MealPlanTableRowProps) {

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);

  return (
    <>
      <div className="col-span-6 grid grid-cols-6 gap-2">
        <p className="col-span-1">{packetName}</p>
        <p className="col-span-2 px-1">{formattedPrice}</p>
        <div className="col-span-3 flex flex-col">
          {foodIngredients.map((fi:FoodIngredient) => {
            return (
              <>
                <p>
                  {fi.ingredientName} - {fi.amount} {fi.unit}
                </p>
              </>
            );
          })}
        </div>
      </div>
      <div className="col-span-5 grid grid-cols-3 gap-2">
        <TargetLabel
          targetLabel={TargetLabelEnum.KARBO}
          value={targetKarbo}
          unit={TargetLabelUnitEnum.G}
        />
        <TargetLabel
          targetLabel={TargetLabelEnum.PROTEIN}
          value={targetProtein}
          unit={TargetLabelUnitEnum.G}
        />
        <TargetLabel
          targetLabel={TargetLabelEnum.KALORI}
          value={targetKalori}
          unit={TargetLabelUnitEnum.KCAL}
        />
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
