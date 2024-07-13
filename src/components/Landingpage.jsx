import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3">
        
      <div className=" uppercase text-[6.5vw] leading-[6vw] font-semibold font-{} tracking-tighter pt-1">
        <div className="textstructure mt-40 px-20">
          <div classname="masker">
            <h1>We Create</h1>
            <div className="flex items-center">
            <motion.div initial={{width:0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className="w-[10vw] mt-[0.5rem] h-[10vh] rounded-2xl bg-contain overflow-hidden py-10 bg-[#520f48]">
    

            </motion.div>
            <h1>Eye opening</h1>

            </div>
            <h1>presentations</h1>
          </div>
        </div>
      </div>

      <div>
        <div className="border-t-[1px] border-zinc-800 mt-20 mb-20 flex justify-between items-center py-5 px-20">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          ))}
          <div className="start flex items-center gap-5">
            <div className="px-5 py-2 border-[1px] border-zinc-400 uppercase font-light text-md rounded-full">
              start the project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
