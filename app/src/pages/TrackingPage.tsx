import TrackingPageSearchBar from "../components/trackingPage/TrackingPageSearchBar";
import TrackingPageCarousel from "@/components/trackingPage/TrackingPageCarousel";
import MealDiterimaProgressChart from "@/components/trackingPage/MealDiterimaProgressChart";
import InfographicBoxes from "@/components/trackingPage/InfographicBoxes";

export default function TrackingPage() {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 py-8 px-4">
        <TrackingPageSearchBar />
        <TrackingPageCarousel />
        <div className="flex w-full h-full gap-4">
          <MealDiterimaProgressChart />
          <div className="flex flex-col h-full w-full">
            <InfographicBoxes /> 
          </div>
        </div>
      </div>
    </>
  );
}
