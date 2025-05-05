import React from 'react'
import { Link } from 'react-router-dom'

const BotActivity: React.FC = () => {
    const bots = Array(20).fill(null).map((_, index) => ({ id: index, name: `Bot ${index + 1}`, creator: 'By Example' }));

    return (
        <div className='bg-white rounded-lg p-3 h-[400px] shadow-md overflow-hidden hover:overflow-auto scrollbar-thin'>
            <div className='flex justify-between'>
                <h1 className='text-[#5D7285] font-semibold text-xl'>Your Activity</h1>
                <div className='flex gap-x-3'>
                    <span>...</span>
                    <Link to='/dashboard/bots'>
                        <button className='bg-[#F4F7FE] text-[#0C7FDA] hover:opacity-80 px-4 py-1 rounded-lg font-semibold'>See all</button>
                    </Link>
                </div>
            </div>

            <div className='mt-3'>
                <div className='flex flex-col gap-y-2'>
                    {bots.slice(0, 16).map((bot) => (
                        <div key={bot.id} className='flex items-center hover:scale-105 duration-300 cursor-pointer hover:shadow-lg p-2 border rounded-lg shadow-sm'>
                            <div className='w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center'>
                                <span className='text-xl'>🤖</span>
                            </div>
                            <div className='ml-3'>
                                <h2 className='font-semibold text-[#5D7285]'>{bot.name}</h2>
                                <p className='text-gray-500'>{bot.creator}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BotActivity