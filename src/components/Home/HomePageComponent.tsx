"use client";

import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import SocialMediaIcons from "../Footer/SocialMediaIcons";
import FeaturedPostsDesign from "./FeaturedPostsDesign";
import Categories from "../Blog/Categories for Home";
import { slug } from "github-slugger";
import { ParallaxScroll } from "../ui/parallax-scroll";

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

  const maxFeaturedBlogs = 5;
  const featuredBlogs = allBlogs
    .filter((blog) => blog.jfkFeatured === true)
    .slice(0, maxFeaturedBlogs);

  return (
    <>
      {/* <Categories
        categories={getUniqueCategories(allBlogs)}
        currentSlug="all"
      /> */}

      {/* <div className="grid grid-cols-1 items-center gap-5 sm:mt-2 mt-7 text-sm md:grid-cols-2">
        <div className="relative col-span-1">
          <input
            type="text"
            placeholder="Search articles…"
            value={searchTerm}
            onChange={handleSearchInputChange}
            className="w-full rounded-full border focus:!border-primary border-slate-200 bg-slate-50 px-4 py-2 text-base focus:bg-transparent dark:border-neutral-800 dark:bg-neutral-800 
            dark:text-neutral-50 text-slate-900 transition-all dark:placeholder:text-neutral-400 dark:hover:bg-neutral-950"
          />
        </div>

        <div className="col-span-1 flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap justify-end">
          <SocialMediaIcons gap="gap-10" />
        </div>
      </div>

      {!isTyping && (
        <FeaturedPostsDesign blogs={allBlogs} featuredBlogs={featuredBlogs} />
      )} */}



      <ParallaxScroll blogs={filteredBlogs} />
    </>
  );
};

export default HomePageComponent;
