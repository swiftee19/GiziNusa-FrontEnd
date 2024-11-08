import TrackingPageSearchBar from "../components/trackingPage/TrackingPageSearchBar";
import TrackingPageCarousel from "@/components/trackingPage/TrackingPageCarousel";
import MealDiterimaProgressChart from "@/components/trackingPage/MealDiterimaProgressChart";

export default function TrackingPage() {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 py-8 px-4">
        <TrackingPageSearchBar />
        <TrackingPageCarousel />
        <div className="flex w-full h-full">
          <MealDiterimaProgressChart />
        </div>
      </div>
    </>
  );
}
