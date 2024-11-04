import { TargetLabelEnum } from "../../../typesEnumsInterfaces/targetLabel";

export enum FoodIngredientUnitEnum {
    KG = "Kg",
    L = "Liter",
}

export type FoodIngredient = {
    ingredientName: string;
    amount: number;
    unit: FoodIngredientUnitEnum;
    targetLabel: TargetLabelEnum;
    caloricValue: number; // in kcal
}