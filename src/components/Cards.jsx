import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex px-32 items-center gap-5'>
        <div className='cardconatiner w-1/2 h-[55vh] '>
            <div className='card w-full relative rounded-xl h-full flex items-center justify-center bg-[#004D43] '>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute py-2 px-1 border-2 rounded-full left-8 bottom-8'>&copy;2019-2021</button>
            </div>
        </div>
        <div className='cardconatiner flex gap-5 w-1/2 h-[55vh] '>
            <div className='card w-1/2 relative flex items-center justify-center rounded-xl h-full bg-[#0a2e2a] '>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute py-2 px-1 border-2 rounded-full left-5 bottom-8'>RATING 5.0 ON CLUTCH</button></div>
            <div className='card w-1/2 relative flex items-center justify-center rounded-xl h-full bg-[#0a2e2a] '>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute py-2 px-1 border-2 rounded-full left-5 bottom-8'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
        </div>

    </div>
  
)

}

export default Cards