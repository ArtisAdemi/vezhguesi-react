import React from 'react'

const Profile: React.FC = () => {
    return (
        <div className='w-[98%]'>
            <div className='px-20 bg-white p-6'>
                <div className='text-4xl mb-4'>Settings</div>
                <div className='flex gap-x-4'>
                    <h1>Profile</h1>
                    <h1>Payments</h1>
                </div>
            </div>
            <div className='flex py-10 bg-white mt-8 '>
                <div className='leftSide w-[40%] px-[6%] flex flex-col justify-center'>
                    <div className='flex flex-col items-center mb-4'>

                        <h1 className='text-[#6C6C6C] text-3xl mb-4'>Profile</h1>
                        <img src="" alt="" />
                        <h1 className='font-bold text-3xl'>Florian Berisha</h1>
                        <h1 className='text-[#6C6C6C] text-xl'>lorem ipsum 2</h1>
                    </div>
                    <div className='flex justify-between'>
                        <div className='items-center flex flex-col'>
                            <h1 className='text-3xl'>21</h1>
                            <h1 className='text-[#6C6C6C]'>Bots</h1>
                        </div>
                        <div className='items-center flex flex-col'>
                            <h1 className='text-3xl'>12</h1>
                            <h1 className='text-[#6C6C6C]'>Active</h1>
                        </div>
                        <div className='items-center flex flex-col'>
                            <h1 className='text-3xl'>9</h1>
                            <h1 className='text-[#6C6C6C]'>Used</h1>
                        </div>
                    </div>
                </div>
                <div className='rightSide'></div>
            </div>
        </div>
    )
}

export default Profile