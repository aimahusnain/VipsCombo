import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DirectionAwareHover } from "./direction-aware-hover";

const PrallaxCard = ({
  translate,
  idx,
  grid,
  title,
  el,
  description,
}: {
  description: any;
  title: any;
  grid: any;
  translate: any;
  idx: any;
  el: any;
}) => {
  return (
    <motion.div style={{ y: translate }} key={`grid-${grid}` + idx}>
      {/* <div className="group relative inline-block overflow-hidden rounded-xl">
        
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
            "
        />
        <Image
          src={el}
          alt="thumbnail"
          height="400"
          width="400"
          className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 1180px) 100vw, 50vw"
        />
      </div> */}

      <DirectionAwareHover imageUrl={el}>
        <p className="font-bold text-xl">{title}</p>
        <p className="font-normal text-sm">{description}</p>
      </DirectionAwareHover>
      {/* <DirectionAwareHover imageUrl="/blogs/alightmotion/Alight Motion Image 1.png">Hello world</DirectionAwareHover> */}
    </motion.div>
  );
};

export default PrallaxCard;
