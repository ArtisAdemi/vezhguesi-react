import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const PageLayout = () => {
    return (
        <div className='fixed w-screen'>
            <div className='flex'>
                <Sidebar />
                <div className='w-full'>
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default PageLayout