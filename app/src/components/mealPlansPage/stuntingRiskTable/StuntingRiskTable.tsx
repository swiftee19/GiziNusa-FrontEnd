import { useEffect, useState } from "react";
import RiskTableHeader from "./RiskTableHeader";
import { StuntingRiskRowProps } from "./StuntingRiskRow";
import StuntingRiskRows from "./StuntingRiskRows";
import { stuntingRiskTableDummyData } from "./stuntingRiskTableDummyData";

export default function StuntingRiskTable() {
  const stuntingRiskRowData = stuntingRiskTableDummyData

  const [sortedStuntingRiskRowData, setSortedStuntingRiskRowData] =
    useState<StuntingRiskRowProps[]>(stuntingRiskRowData);

  const [isRegionSortDescending, setIsRegionSortDescending] =
    useState<boolean>(true);
  const [isRiskSortDescending, setIsRiskSortDescending] =
    useState<boolean>(true);
  const [isPacketSortDescending, setIsPacketSortDescending] =
    useState<boolean>(true);
  const [isPriceSortDescending, setIsPriceSortDescending] =
    useState<boolean>(true);

  const resetAllSort = () => {
    setIsRegionSortDescending(true);
    setIsRiskSortDescending(true);
    setIsPacketSortDescending(true);
    setIsPriceSortDescending(true);
  };

  const switchRegionSort = () => {
    resetAllSort();
    setIsRegionSortDescending(!isRegionSortDescending);
  };
  const switchRiskSort = () => {
    resetAllSort();
    setIsRiskSortDescending(!isRiskSortDescending);
  };
  const switchPacketSort = () => {
    resetAllSort();
    setIsPacketSortDescending(!isPacketSortDescending);
  };
  const switchPriceSort = () => {
    resetAllSort();
    setIsPriceSortDescending(!isPriceSortDescending);
  };

  useEffect(() => {
    const sortedData = [...stuntingRiskRowData].sort((a, b) => {
      if (isRegionSortDescending) {
        return a.region.localeCompare(b.region);
      } else {
        return b.region.localeCompare(a.region);
      }
    });
    setSortedStuntingRiskRowData(sortedData);
  }, [isRegionSortDescending, stuntingRiskRowData]);

  useEffect(() => {
    const sortedData = [...stuntingRiskRowData].sort((a, b) => {
      if (isRiskSortDescending) {
        return a.risk.localeCompare(b.risk);
      } else {
        return b.risk.localeCompare(a.risk);
      }
    });
    setSortedStuntingRiskRowData(sortedData);
  }, [isRiskSortDescending, stuntingRiskRowData]);

  useEffect(() => {
    const sortedData = [...stuntingRiskRowData].sort((a, b) => {
      if (isPacketSortDescending) {
        return a.packet.localeCompare(b.packet);
      } else {
        return b.packet.localeCompare(a.packet);
      }
    });
    setSortedStuntingRiskRowData(sortedData);
  }, [isPacketSortDescending, stuntingRiskRowData]);

  useEffect(() => {
    const sortedData = [...stuntingRiskRowData].sort((a, b) => {
      if (isPriceSortDescending) {
        return parseInt(a.price) - parseInt(b.price);
      } else {
        return parseInt(b.price) - parseInt(a.price);
      }
    });
    setSortedStuntingRiskRowData(sortedData);
  }, [isPriceSortDescending, stuntingRiskRowData]);

  return (
    <>
      <div className="bg-white w-full h-full rounded-xl border-2 border-solid border-lightgray flex flex-col gap-1 p-4 overflow-hidden">
        <h2 className="text-boldgray">Risiko Stunting</h2>
        <div className="w-full h-fit grid grid-cols-4 gap-4 relative">
          {/* headers */}
          <RiskTableHeader
            isPacketSortDescending={isPacketSortDescending}
            isPriceSortDescending={isPriceSortDescending}
            isRegionSortDescending={isRegionSortDescending}
            isRiskSortDescending={isRiskSortDescending}
            switchPacketSort={switchPacketSort}
            switchPriceSort={switchPriceSort}
            switchRegionSort={switchRegionSort}
            switchRiskSort={switchRiskSort}
          />
          {/* divider */}
          <span className="divider col-span-4"></span>
          {/* items */}
          <StuntingRiskRows stuntingRiskRowData={sortedStuntingRiskRowData} />
        </div>
      </div>
    </>
  );
}
