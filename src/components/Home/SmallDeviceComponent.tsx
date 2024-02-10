import { allBlogs } from "@/.contentlayer/generated";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const SmallDeviceComponent = ({ blogs }: { blogs: any[] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true }) as any
  );

  const PopularPosts = allBlogs.filter((blog) => blog.IsPopular === true);

  return (
    <div className="text-black dark:text-white">
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
                <div className="relative rounded-xl overflow-hidden w-[222px] h-[330px]">
                  <Link href={blog.url}>
                    <Image
                      src={blog.image.filePath.replace("../public", "")}
                      placeholder="blur"
                      blurDataURL={blog.image.blurhashDataUrl}
                      alt={blog.title}
                      width={blog.image.width}
                      height={blog.image.height}
                      className="w-full h-full object-center object-cover"
                      sizes="(max-width: 1180px) 100vw, 50vw"
                    />
                  </Link>
                  <Link
                    href={blog.url}
                    className="w-full transition-all absolute bottom-0 left-0 right-0 text-lg font-bold bg-gradient-to-b to-black/80 pb-6 from-transparent p-4 text-white"
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
      <div className="flex mt-5 flex-col">
        <h1 className="text-3xl font-extrabold">Popular</h1>
        <div className="gap-6">
          {PopularPosts.map((blog, index: number) => (
            <div key={index} className="w-full gap-5 my-6 flex justify-between">
              <Link href={blog.url} className="w-1/2">
                {blog.image && <Image
                  src={blog.image.filePath.replace ("../public", "")}
                  placeholder="blur"
                  blurDataURL={blog.image.blurhashDataUrl}
                  alt={blog.title}
                  width={blog.image.width}
                  height={blog.image.height}
                  className="w-full rounded-xl h-64 object-center object-cover"
                />}
              </Link>

              <div className="mt-5 mb-10 w-1/2">
                <Link href={blog.url} className="text-lg font-bold dark:text-white text-black">
                  {blog.title}
                </Link>
                <p className="mt-1 font-normal font-sans dark:text-slate-900 text-slate-400">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallDeviceComponent;
