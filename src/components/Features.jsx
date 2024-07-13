import { motion, useAnimation } from "framer-motion";
import React from "react";

function Features() {
  const Cards = [useAnimation(), useAnimation()];

  const Handlehover = (index)=> {
    Cards[index].start({ y: "0" })
 };

  const Handlehoverend = (index)=> {
    Cards[index].start({ y: "100%" })}

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-7xl tracking-tight ">Featured projects</h1>
      </div>
      <div className="px-16">
        <div className="cards w-full flex mt-10 gap-10">
          <motion.div
            onHoverStart={() => Handlehover(0)}
            onHoverEnd={()=> Handlehoverend(0)}
            className="cardcontainer relative w-1/2  h-[70vh]"
          >
            <h1 className="absolute top-1/2 left-full flex overflow-hidden -translate-x-1/2 text-[#CDEA68] -translate-y-1/2  z-[9] text-7xl leading-none tracking-tighter">
              
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={Cards[0]}
                  transition={{ease:[0.22, 1, 0.36, 1] , delay: index*0.1}}
                  className="inline-block font-semibold text-[6vw]"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => Handlehover(1)}
            onHoverEnd={()=> Handlehoverend(1)} 
             className="cardcontainer relative w-1/2  h-[70vh]">
            <h1 className="absolute flex overflow-hidden top-1/2 right-full translate-x-1/2 text-[#CDEA68] -translate-y-1/2  z-[9] text-7xl leading-none tracking-tighter">
              
              {"VISE".split("").map((item, index) => (
               <motion.span
               initial={{ y: "100%" }}
               animate={Cards[1]}
               transition={{ease:[0.22, 1, 0.36, 1] , delay: index*0.1}}
               className="inline-block font-semibold text-[6vw]"
             >
               {item}
             </motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div> 
      </div>
    </div>
  );
} 

export default Features;
