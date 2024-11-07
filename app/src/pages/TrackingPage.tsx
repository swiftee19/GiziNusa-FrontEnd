import TrackingPageSearchBar from "../components/trackingPage/TrackingPageSearchBar";
import TrackingPageCarousel from "@/components/trackingPage/TrackingPageCarousel";

export default function TrackingPage() {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 py-8 px-4">
        <TrackingPageSearchBar />
        <TrackingPageCarousel />
      </div>
    </>
  );
}
