"use client";

import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Categories from "../Blog/Categories for Home";

const HomePageComponent = () => {
  const router: any = useRouter();
  const { q } = router.query || { q: "" };
  const [searchTerm, setSearchTerm] = useState(q);
  const [isTyping, setIsTyping] = useState(false);
  const [allCategories, setAllCategories] = useState<string[]>(["all"]);
  const paths: { slug: string }[] = [{ slug: "all" }];

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsTyping(!!e.target.value.trim());
  };

  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true }) as any
  );

  const getUniqueCategories = (blogs: any[]) => {
    const categoriesSet = new Set<string>();
    blogs.forEach((blog) => {
      if (blog.tags) {
        blog.tags.forEach((tag: string) => {
          const slugified = slug(tag);
          categoriesSet.add(slugified);
          paths.push({ slug: slugified });
        });
      }
    });
    return [...Array.from(categoriesSet)];
  };

  const filteredBlogs = allBlogs.filter((blog) => {
    const normalizedTitle = blog.title.toLowerCase();
    const normalizedQuery = searchTerm.toLowerCase();

    return (
      normalizedTitle.includes(normalizedQuery) &&
      (isTyping || !blog.jfkFeatured)
    );
  });

  const PopularPosts = allBlogs.filter((blog) => blog.IsPopular === true);

  return (
    <div>
      <Categories
        categories={getUniqueCategories(allBlogs)}
        currentSlug="all"
      />

      <div className="grid grid-cols-1 items-center gap-5 my-7 mb-9 text-sm md:grid-cols-2">
        <input
          type="text"
          placeholder="Search articles…"
          value={searchTerm}
          onChange={handleSearchInputChange}
          className="w-full rounded-full border focus:!border-primary border-slate-200 bg-slate-50 px-4 py-2 text-base focus:bg-transparent dark:border-neutral-800 dark:bg-neutral-800 
            dark:text-neutral-50 text-slate-900 transition-all dark:placeholder:text-neutral-400 dark:hover:bg-neutral-950"
        />
      </div>
      {/* {!isTyping && (
        <FeaturedPostsDesign blogs={allBlogs} featuredBlogs={featuredBlogs} />
      )} */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2">
          {isTyping &&
            filteredBlogs.map((blog, index: number) => (
              <article key={index} className="col-span-1 row-span-1 relative">
                <BlogLayoutThree blog={blog} />
              </article>
            ))}
      </div>
      
      <div className="flex flex-col gap-10">
        <div className="flex w-full h-full items-center justify-center">
          <Carousel plugins={[plugin.current]} className="w-full">
            <CarouselContent>
              {filteredBlogs.map((blog, index: number) => (
                <CarouselItem className="group basis-60" key={index}>
                  <div className="relative rounded-xl overflow-hidden w-[222px] h-[330px]">
                    <Link href={blog.url}>
                      {blog.image && (
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
)}

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
              <div
                key={index}
                className="w-full gap-5 my-6 flex justify-between"
              >
                <Link href={blog.url} className="w-1/2">
                  {blog.image && (
                    <Image
                      src={blog.image.filePath.replace("../public", "")}
                      placeholder="blur"
                      blurDataURL={blog.image.blurhashDataUrl}
                      alt={blog.title}
                      width={blog.image.width}
                      height={blog.image.height}
                      className="w-full rounded-xl h-64 object-center object-cover"
                    />
                  )}
                </Link>

                <div className="mt-5 mb-10 w-1/2">
                  <Link
                    href={blog.url}
                    className="text-lg font-bold dark:text-white text-black"
                  >
                    {blog.title}
                  </Link>
                  <p className="mt-1 font-normal font-sans text-slate-900 dark:text-slate-400">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
