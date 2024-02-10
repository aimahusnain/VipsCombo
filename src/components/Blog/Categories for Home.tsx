import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

interface CategoriesProps {
  categories: any;
  currentSlug: any;
}

const Categories: React.FC<CategoriesProps> = ({ categories, currentSlug }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-full sm:mx-0 mx-10 md:mx-10"
    >
      <CarouselContent className="px-6">
        <CarouselItem className="flex w-fit basis-auto">
          <Category
            key="All"
            link="/"
            name="All"
            active={currentSlug === slug("All")}
          />
        </CarouselItem>
        {categories.map((cat: any) => (
          <CarouselItem className="flex w-fit basis-auto">
            <Category
              key={cat}
              link={`/categories/${cat}`}
              name={cat}
              active={currentSlug === slug(cat)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Categories;
