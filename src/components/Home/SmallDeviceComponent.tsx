import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/src/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const SmallDeviceComponent = ({ blogs }: { blogs: any[] }) => {
  
const plugin = React.useRef(
  Autoplay({ delay: 1500, stopOnInteraction: true }) as any
);



  return (
    <div className="flex w-full h-full items-center justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {blogs.map((blog, index: number) => (
            <CarouselItem className="group basis-60" key={index}>
              <div className="relative w-[222px] h-[330px]">
                <Link href={blog.url}>
                  <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    className="rounded-xl w-full h-full object-center object-cover"
                    sizes="(max-width: 1180px) 100vw, 50vw"
                  />
                </Link>
                <Link
                  href={blog.url}
                  className="w-full transition-all absolute bottom-0 left-0 right-0 text-lg font-bold bg-gradient-to-b to-white/80 dark:to-black/80 pb-6 from-transparent p-4 text-white"
                >
                  {blog.title.slice(0, 37)}...
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default SmallDeviceComponent;
