import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className='text-[3vw] leading-[4vw] tracking-tight'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full  flex gap-5 mt-20 tracking-tighter border-t-[1px] pt-10 border-[#a1ad75]'>
            <div className='w-1/2  '>
            <h1 className='text-5xl'>Our approach:</h1>
            <button className='px-7 flex gap-8 items-center uppercase bg-zinc-900 mt-10 py-4 rounded-full text-white'>Read More
                <div className='w-2 h-2 rounded-full bg-white'></div>
            </button>
            </div>
            <div className='w-[38vw] h-[52vh] bg-cover overflow-hidden bg-blue-400 rounded-3xl'>
              <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About