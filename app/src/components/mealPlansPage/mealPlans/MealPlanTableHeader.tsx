interface MealPlanTableHeaderProps {
  isPacketSortDescending: boolean;
  isPriceSortDescending: boolean;
  isCarbohydratesSortDescending: boolean;
  isProteinSortDescending: boolean;
  isCaloriesSortDescending: boolean;
  switchPacketSort: () => void;
  switchPriceSort: () => void;
  switchCarbohydratesSort: () => void;
  switchProteinSort: () => void;
  switchCaloriesSort: () => void;
}

export default function MealPlanTableHeader({
  isPacketSortDescending,
  isPriceSortDescending,
  isCarbohydratesSortDescending,
  isProteinSortDescending,
  isCaloriesSortDescending,
  switchPacketSort,
  switchPriceSort,
  switchCarbohydratesSort,
  switchProteinSort,
  switchCaloriesSort,
}: MealPlanTableHeaderProps) {
  return (
    <>
      {/* master header */}
      <div className="h-fit col-span-11 grid grid-cols-11 gap-2">
        <p className="col-span-6 w-full bg-primary text-white text-center">
          Rekomendasi Meal Plans
        </p>
        <p className="col-span-5 w-full bg-primary text-white text-center">
          Target
        </p>
      </div>

      {/* padding */}
      <span className="col-span-1" />

      {/* sorting headers */}
      {/* rekomendasi meal plans */}
      <div className="col-span-6 grid grid-cols-6 gap-2">
        <div
          className="col-span-1 flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {switchPacketSort()}}
        >
          <p className="text-lg text-black">Paket</p>
          <img
            className="size-2"
            style={{ transform: isPacketSortDescending ? "rotate(180deg)" : "" }}
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="col-span-2 px-1 flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {switchPriceSort()}}
        >
          <p className="text-lg text-black">Harga</p>
          <img
            className="size-2"
            style={{ transform: isPriceSortDescending ? "rotate(180deg)" : "" }}
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="col-span-3 flex items-center gap-2"
        >
          <p className="text-lg text-black">Bahan Pangan</p>
        </div>
      </div>

      {/* target */}
      <div className="col-span-5 grid grid-cols-3 gap-2">
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {switchCarbohydratesSort()}}
        >
          <p className="text-lg text-black">Karbo</p>
          <img
            className="size-2"
            style={{ transform: isCarbohydratesSortDescending ? "rotate(180deg)" : "" }}
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {switchProteinSort()}}
        >
          <p className="text-lg text-black">Protein</p>
          <img
            className="size-2"
            style={{ transform: isProteinSortDescending ? "rotate(180deg)" : "" }}
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {switchCaloriesSort()}}
        >
          <p className="text-lg text-black">Kalori</p>
          <img
            className="size-2"
            style={{ transform: isCaloriesSortDescending ? "rotate(180deg)" : "" }}
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
      </div>
    </>
  );
}
