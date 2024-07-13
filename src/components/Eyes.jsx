import React, { useEffect, useState } from "react";

function Eyes() {

    const [rotate, setrotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let Mousex= e.clientX;
            let Mousey = e.clientY;

            let DeltaX = Mousex- window.innerWidth/2;
            let DeltaY = Mousey- window.innerHeight/2; 

            var angle = Math.atan2(DeltaY, DeltaX) * (180/Math.PI);
            setrotate(angle-180)
        })
    })

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-screen bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className=" absolute flex gap-9 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[14vw] flex items-center justify-center h-[14vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className=" line absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] w-full h-10">
              <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>

              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative  bg-zinc-900 rounded-full">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
              <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
