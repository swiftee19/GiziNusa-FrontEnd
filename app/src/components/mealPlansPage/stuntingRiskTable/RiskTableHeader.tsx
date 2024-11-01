interface RiskTableHeaderProps {
  isRegionSortDescending: boolean;
  isRiskSortDescending: boolean;
  isPacketSortDescending: boolean;
  isPriceSortDescending: boolean;
  switchRegionSort: () => void;
  switchRiskSort: () => void;
  switchPacketSort: () => void;
  switchPriceSort: () => void;
}

export default function RiskTableHeader({
  isRegionSortDescending,
  isRiskSortDescending,
  isPacketSortDescending,
  isPriceSortDescending,
  switchRegionSort,
  switchRiskSort,
  switchPacketSort,
  switchPriceSort,
}: RiskTableHeaderProps) {
  return (
    <>
      <div className="w-full h-fit pt-4 col-span-4 grid grid-cols-4">
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {
            switchRegionSort();
          }}
        >
          <p className="text-lg text-black">Wilayah</p>
          <img
            className="size-2"
            style={{ transform: isRegionSortDescending ? "rotate(180deg)" : "" }}
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {
            switchRiskSort();
          }}
        >
          <p className="text-lg text-black">Risiko</p>
          <img
            className="size-2"
            style={{ transform: isRiskSortDescending ? "rotate(180deg)" : "" }}
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {
            switchPacketSort();
          }}
        >
          <p className="text-lg text-black">Packet</p>
          <img
            className="size-2"
            style={{ transform: isPacketSortDescending ? "rotate(180deg)" : "" }}
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => {
            switchPriceSort();
          }}
        >
          <p className="text-lg text-black">Harga</p>
          <img
            className="size-2"
            style={{ transform: isPriceSortDescending ? "rotate(180deg)" : "" }}
            src="/arrow_down_icon.svg"
            alt="arrow down icon"
          />
        </div>
      </div>
    </>
  );
}
