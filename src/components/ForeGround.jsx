import React, { useState, useRef } from 'react';
import Card from './Card';

const ForeGround = () => {
    const ref = useRef(null);
    const [data, setData] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [currData, setCurrData] = useState({ taskName: "", taskDesc: "" });

    return (
        <div ref={ref} className='w-screen min-h-screen relative flex flex-wrap z-[3] bg-opacity-20 bg-black'>
            <div className='p-5 absolute sm:top-[10%] sm:left-[84%]'>
                <button className='bg-blue-600 absolute z-10 top-3.5 left-10 px-9 py-2 rounded-xl' onClick={() => setIsClicked(true)}>add</button>
                {isClicked && (
                    <div className='absolute top-16 z-10 bg-black/80 rounded-md'>
                        <div className='w-52 h-96 rounded-lg'>
                            <div className='cursor-pointer' onClick={() => setIsClicked(false)}>
                                <div className="w-[15px] absolute top-5 right-3 rotate-[45deg] h-[2px] bg-white/70"></div>
                                <div className="w-[15px] absolute top-5 right-3 -rotate-[45deg] h-[2px] bg-white/70"></div>
                            </div>
                            <div className='pt-10 flex flex-col justify-between h-[80%] items-center'>
                                <div>
                                    <div className="flex flex-col items-center">
                                        <label htmlFor="" className='text-slate-400'>taskname</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setCurrData({ ...currData, taskName: e.target.value })}
                                            className='rounded w-[80%] bg-slate-300 px-1'
                                        />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <label htmlFor="" className='text-slate-400'>task description</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setCurrData({ ...currData, taskDesc: e.target.value })}
                                            className='rounded w-[80%] bg-slate-300 px-1'
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        setData([...data, currData]);
                                        setCurrData({ taskName: "", taskDesc: "" });
                                        setIsClicked(false)
                                    }}
                                    className='bg-blue-700 text-white font-mono font-semibold px-3 py-1 rounded-md hover:bg-sky-600'
                                >
                                    add item
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {data.map((curr, index) => {
                return (
                    <Card
                        referanceToParent={ref}
                        taskDesc={curr.taskDesc}
                        taskName={curr.taskName}
                        key={index}
                        onClose={() => setData(data.filter((_, i) => i !== index))}
                    />
                );
            })}
        </div>
    );
};

export default ForeGround;
