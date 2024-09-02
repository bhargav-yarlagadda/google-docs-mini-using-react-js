import React from 'react'

const Background = () => {
  return (
    <div className='w-full h-screen fixed z-[2]' >
      <div className="w-full absolute selection:text-yellow-200  top-3 flex justify-center py-4 text-zinc-600 text-x\ font-semibold">
        Documents
        </div>
      <h1 className='text-7xl break-all selection:text-sky-400  sm:text-[12vw] absolute font-serif -translate-x-[50%] -translate-y-1/2 left-1/2 tracking-wider top-1/2 text-center text-gray-700 font-[900] z-0 ' >
          Docs.
      </h1> 
    </div>
  )
}

export default Background
