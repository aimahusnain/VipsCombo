// "use client";
// import { useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import PrallaxCard from "./parallax-card";
// import { DirectionAwareHover } from "./direction-aware-hover";

// export const ParallaxScroll = ({
//   blogs,
// }: {
//   blogs: any[];
// }) => {
//   const gridRef = useRef<any>(null);
//   const { scrollYProgress } = useScroll({
//     container: gridRef.current,
//     offset: ["start start", "end start"],
//   });

//   const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -400]);
//   const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
//   const translateThird = useTransform(scrollYProgress, [0, 1], [0, -400]);

//   const third = Math.ceil(blogs.length / 3);

//   const firstPart = blogs.slice(0, third);
//   const secondPart = blogs.slice(third, 2 * third);
//   const thirdPart = blogs.slice(2 * third);

//   return (
//     <div
//       className="grid grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl h-[50rem] overflow-y-auto scrollbar-hide scroll-smooth w-full mx-auto gap-10 px-10"
//       ref={gridRef}
//     >
//       <div className="grid gap-10">
//         {firstPart.map((blog, idx) => (
//           <motion.div
//             style={{ y: translateFirst }} // Apply the translateY motion value here
//             key={"grid-1" + idx}
//           >
//             <DirectionAwareHover imageUrl={blog.image.filePath.replace("../public", "")}>
//               <p className="font-bold text-xl">{blog.title.slice(0, 10)}</p>
//               <p className="font-normal text-sm">{blog.description.slice(0, 55)}</p>
//             </DirectionAwareHover>
//           </motion.div>
//         ))}
//       </div>

//       <div className="grid gap-10">
//         {secondPart.map((blog, idx) => (
//           <PrallaxCard
//             title={blog.title}
//             description={blog.description}
//             el={blog.image.filePath.replace("../public", "")}
//             idx={idx}
//             translate={translateSecond}
//             grid="2"
//           />
//         ))}
//       </div>

//       <div className="grid gap-10">
//         {thirdPart.map((blog, idx) => (
//           <PrallaxCard
//             title={blog.title}
//             description={blog.description}
//             el={blog.image.filePath.replace("../public", "")}
//             idx={idx}
//             translate={translateThird}
//             grid="3"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/src/utils/cn";
import PrallaxCard from "./parallax-card";

export const ParallaxScroll = ({ blogs }: { blogs: any[] }) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(blogs.length / 3);

  const firstPart = blogs.slice(0, third);
  const secondPart = blogs.slice(third, 2 * third);
  const thirdPart = blogs.slice(2 * third);

  return (
    <div className="h-[50rem] scrollbar-hide scroll-smooth items-start overflow-y-auto w-full" ref={gridRef}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 pb-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((blog, idx) => (
            <PrallaxCard
              title={blog.title}
              description={blog.description}
              el={blog.image.filePath.replace("../public", "")}
              idx={idx}
              translate={translateFirst}
              grid="1"
            />
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((blog, idx) => (
            <PrallaxCard
              title={blog.title}
              description={blog.description}
              el={blog.image.filePath.replace("../public", "")}
              idx={idx}
              translate={translateSecond}
              grid="2"
            />
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((blog, idx) => (
            <PrallaxCard
              title={blog.title}
              description={blog.description}
              el={blog.image.filePath.replace("../public", "")}
              idx={idx}
              translate={translateThird}
              grid="3"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
