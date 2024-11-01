import MealPlanTableHeader from "./MealPlanTableHeader";
import MealPlanTableRow from "./MealPlanTableRow";

export default function MealPlans() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-xl border-2 border-solid border-lightgray p-4 flex flex-col gap-2">
        <div className="w-full flex gap-2 items-center justify-start">
          <img className="size-8" src="/ai_icon.svg" alt="AI Icon" />
          <h2 className="text-boldgray">Meal Plans</h2>
        </div>
        {/* meal plan table */}
        <div className="w-full h-fit grid grid-cols-12 gap-2 bg-white">
          <MealPlanTableHeader />
          {/* divider */}
          <span className="col-span-11 h-[0.125rem] bg-lightgray" />
          {/* data */}
          <MealPlanTableRow />
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
