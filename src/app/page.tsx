'use client'

import { allBlogs } from "@/.contentlayer/generated";
import HomePageComponent from "@/src/components/Home/HomePageComponent";
import { slug } from "github-slugger";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SmallDeviceComponent from "../components/Home/SmallDeviceComponent";


const Home = () => {
  const router: any = useRouter();
  const { q } = router.query || { q: "" };
  const [searchTerm, setSearchTerm] = useState(q);
  const [isTyping, setIsTyping] = useState(false);

  const filteredBlogs = allBlogs.filter((blog) => {
    const normalizedTitle = blog.title.toLowerCase();
    const normalizedQuery = searchTerm.toLowerCase();

    return (
      normalizedTitle.includes(normalizedQuery) &&
      (isTyping || !blog.jfkFeatured)
    );
  });

  return (
    <article className="mt-6 flex gap-5 flex-col text-white px-5 sm:px-10 md:px-24 sxl:px-32">
      <div className="visible sm:hidden">
        <SmallDeviceComponent/>
      </div>
      {/* TODO: Design the Homepage */}
      <div className="hidden sm:flex">
        <HomePageComponent />
      </div>
    </article>
  );
};

export default Home;
