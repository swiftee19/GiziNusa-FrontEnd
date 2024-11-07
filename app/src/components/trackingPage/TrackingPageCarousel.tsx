import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TrackingPageCarousel() {
    
  return (
    <>
      <div className="w-full flex items-center justify-center mt-4">
        <Carousel className="bg-offwhite w-3/4 h-[20vh]">
          <CarouselContent>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
