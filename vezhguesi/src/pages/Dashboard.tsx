import React from 'react'
import LineChart from '../components/LineChart'

const Dashboard: React.FC = () => {
    return (
        <div>
            Dashboard
            <div className='w-full h-[500px]'>
                <LineChart />
            </div>
        </div>
    )
}

export default Dashboard