export enum FoodIngredientUnitEnum {
    KG = "Kg",
    L = "Liter",
}

export enum FoodIngredientMacroTypeEnum {
    KARBO = "Karbo",
    PROTEIN = "Protein",
}

export type foodIngredient = {
    ingredientName: string;
    amount: number;
    unit: FoodIngredientUnitEnum;
    foodIngredientMacroType: FoodIngredientMacroTypeEnum; // karbo | protein
    caloricValue: number; // in kcal
}