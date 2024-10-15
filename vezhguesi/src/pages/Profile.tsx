import React from 'react'
import profile from "../assets/profile.jpg"
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
            <div className='flex bg-white mt-8 '>
                <div className='leftSide w-[45%] px-[6%] border-2 border-l-0 border-t-0 border-b-0 flex flex-col py-12 justify-center'>
                    <div className='flex flex-col items-center mb-4'>

                        <h1 className='text-[#6C6C6C] text-3xl mb-4'>Profile</h1>
                        <img src={profile} alt="" />
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
                <div className='rightSide w-[55%] px-[6%] py-24'>
                    <form action="" className='pt-6'>
                        <div className='flex justify-between border-2 border-l-0 border-r-0 border-t-0 pb-6'>
                            <h1 className='font-bold text-lg'>Account Information</h1>
                            <div className='flex gap-x-4'>
                                <button className='bg-slate-400 rounded-lg px-5 py-1 text-white'>Edit</button>
                                <button className='bg-[#0C7FDA] rounded-lg px-5 py-1 text-white font-semibold text-sm'>SAVE</button>
                            </div>
                        </div>
                        <div className='flex gap-x-4 mt-6 justify-between'>
                            <div className='flex flex-col w-[55%]'>
                                <label htmlFor="" className='mb-3'>FIRST NAME</label>
                                <input type="text" name="" id="" className='border-2 border-[#E5E5E5] rounded-md py-1' />
                            </div>
                            <div className='flex flex-col w-[45%]'>
                                <label htmlFor="" className='mb-3'>LAST NAME</label>
                                <input type="text" name="" id="" className='border-2 border-[#E5E5E5] rounded-md py-1' />
                            </div>
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='mb-3'>lorem</label>
                            <input type="text" name="" id="" className='border-2 border-[#E5E5E5] rounded-md py-1' />
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='mb-3'>EMAIL</label>
                            <input type="text" name="" id="" className='border-2 border-[#E5E5E5] rounded-md py-1' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile