import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function TrackingPageCarousel() {
  return (
    <div className="w-full flex items-center justify-center mt-4">
      <Carousel className="w-5/6">
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-4 w-full">
            <div className="bg-offwhite h-[20vh] flex items-center justify-center">
              <img className="w-full h-full object-fill" src="/trackingPage/carousel-image-1.svg" alt="Carousel image 1" />
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4 w-full">
            <div className="bg-offwhite h-[20vh] flex items-center justify-center">
              <img className="w-full h-full object-fill" src="/trackingPage/carousel-image-1.svg" alt="Carousel image 2" />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}