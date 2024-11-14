import React from 'react'
import LineChart from '../components/LineChart'
import data from '../assets/data/mockData'
import mockSentimentData from '../assets/data/mockSentimentData'
import { useAuth } from '../hooks/useAuth'
import BotActivity from '../components/BotActivity'


const Dashboard: React.FC = () => {
    const { currentUser, authToken } = useAuth();

    return (
        <div className='gap-4'>
            {/* TESTING AREA */}
            <h1>Hello {currentUser?.firstName}</h1>
            <h1 className='hidden md:block'>Your Token: {authToken}</h1>
            {/* TESTING AREA */}
            <div className='flex flex-col md:flex-row justify-between '>
                <div className='h-[400px] shadow-md rounded-lg bg-white w-[100%] md:h-[400px] md:w-[50%] md:px-3'>
                    <LineChart
                        data={data}
                        xAxisLabel="Month"
                        yAxisLabel="Mentions"
                    />
                </div>
                <div className='w-full mt-5 md:mt-0 md:w-[25%]'>
                    <BotActivity />
                </div>
            </div>
            <div className='h-[400px] mt-5 shadow-md rounded-lg bg-white w-[100%] md:h-[400px] md:w-[50%] md:px-3'>
                <LineChart
                    data={mockSentimentData}
                    xAxisLabel="Month"
                    yAxisLabel="Sentiment"
                />
            </div>
            <div className='h-[400px] w-[400px] mx-auto md:mx-0'>
                {/* <PieChart data={transformedData} /> */}
            </div>
        </div>
    )
}

export default Dashboard
