import { TargetLabelEnum } from "../mealPlansPage/mealPlans/TargetLabel";

export enum FoodIngredientUnitEnum {
    KG = "Kg",
    L = "Liter",
}

export type foodIngredient = {
    ingredientName: string;
    amount: number;
    unit: FoodIngredientUnitEnum;
    targetLabel: TargetLabelEnum;
    caloricValue: number; // in kcal
}