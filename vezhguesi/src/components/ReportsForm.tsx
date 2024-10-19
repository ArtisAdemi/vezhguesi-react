import React from 'react'

interface ReportsFormProps {
    closeModal: () => void;
}

const ReportsForm: React.FC<ReportsFormProps> = ({ closeModal }) => {

    return (
        <div className="fixed z-100 h-full inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg max-w-lg w-full space-y-4">
                <h1 className='text-[#54595E] text-2xl font-semibold'>New Report</h1>
                <form action="" className='flex flex-col'>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2' htmlFor="subject">Subject</label>
                        <input className='p-2 border border-[#4F4F4F] rounded-lg'
                            type="text"
                            id='subject'
                            placeholder='Your subject' />
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col mb-3 mr-2 w-1/2'>
                            <label className='mb-2' htmlFor="fromDate">From Date</label>
                            <input
                                className='p-2 border border-[#4F4F4F] rounded-lg'
                                type="date"
                                id='fromDate'
                            />
                        </div>
                        <div className='flex flex-col mb-3 w-1/2'>
                            <label className='mb-2' htmlFor="toDate">To Date</label>
                            <input
                                className='p-2 border border-[#4F4F4F] rounded-lg'
                                type="date"
                                id='toDate'
                            />
                        </div>

                    </div>
                </form>
                <button className='border border-black w-1/5 text-black py-2 px-3 rounded-lg mr-4 hover:opacity-80 duration-300 hover:scale-105' onClick={closeModal}>Cancel</button>
                <button className='bg-[#0C7FDA] w-1/5 text-white py-2 px-3 rounded-lg hover:opacity-80 duration-300 hover:scale-105' onClick={closeModal}>Submit</button>
            </div>
        </div>
    )
}

export default ReportsForm