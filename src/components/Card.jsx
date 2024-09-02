import React from 'react'
import { motion } from 'framer-motion'
const Card = ({taskName,taskDesc,onClose,referanceToParent,index}) => {
  return (
    <motion.div drag dragConstraints={referanceToParent} className="w-60 h-80 relative bg-black/60 rounded-3xl z-[4]">
        
        <div className='cursor-pointer' onClick={onClose}  >
            <div className="w-[15px] absolute top-5 right-3 rotate-[45deg] h-[2px] bg-white/70"></div>
            <div className="w-[15px] absolute top-5 right-3 -rotate-[45deg] h-[2px] bg-white/70" ></div>
        </div>
        <div className='h-[80%] p-2 font-semibold text-[#fff]/70 font-mono absolute overflow-hidden top-5 '>
            {
                taskDesc
            }
        </div>
        <div className="h-[20%] absolute w-full bottom-0 overflow-hidden bg-blue-500 rounded-b-3xl">
            <h6 className='text-sm text-center'>
                task name
            </h6>
            <p className='overflow-clip text-xs px-2 transition-all ease-in '>
                {
                    taskName
                }        
            </p>
        </div>
    </motion.div>

  )
}

export default Card
