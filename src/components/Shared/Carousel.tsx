import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { twMerge } from "tailwind-merge";

const CarouselComp = () => {
  const itemsCarusel = [
    "/imges/mainPage.jpg",
    "/imges/mainPage1.jpg",
    "/imges/mainPage3.jpg",
    "/imges/carusel1.webp",
    "/imges/carusel2.webp",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setActiveIndex(Math.floor(itemsCarusel.length / 2));
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? itemsCarusel.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === itemsCarusel.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative">
      <Carousel>
        <CarouselPrevious onClick={handlePrevious} />
        <CarouselContent>
          {itemsCarusel.map((image, index) => (
            <CarouselItem
              key={index}
              className={twMerge(
                " transition-all duration-500 ease-in-out",
                index === activeIndex
                  ? "scale-100 opacity-100 z-10"
                  : "scale-75 opacity-50 blur-sm"
              )}
            >
              <div className="relative p-4">
                <Card>
                  <CardContent className="flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Изображение ${index + 1}`}
                      className="w-[100%] h-[550px] object-contain rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext onClick={handleNext} />
      </Carousel>
    </div>
  );
};

export default CarouselComp;
