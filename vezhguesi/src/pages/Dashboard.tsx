import React from 'react'
import LineChart from '../components/LineChart'
import data from '../assets/data/mockData'
import mockSentimentData from '../assets/data/mockSentimentData'
import PieChart from '../components/PieChart'
import { useUser } from '../context/UserContext'
import Logout from '../components/Logout'

// Transform mockSentimentData to the expected format
const transformedData = mockSentimentData.map(item => {
    const positiveValue = item.data
        .filter(d => d.y > 0)
        .reduce((acc, curr) => acc + curr.y, 0);

    const negativeValue = item.data
        .filter(d => d.y < 0)
        .reduce((acc, curr) => acc + Math.abs(curr.y), 0);

    return [
        { id: `${item.id}-positive`, label: 'Positive', value: positiveValue },
        { id: `${item.id}-negative`, label: 'Negative', value: negativeValue }
    ];
}).flat();

const Dashboard: React.FC = () => {
    const { user } = useUser();

    return (
        <div className='gap-4'>
            {/* TESTING AREA */}
            <h1>Hello {user?.userData.firstName}</h1>
            <h1>Your Token: {user?.token}</h1>
            <Logout />
            {/* TESTING AREA */}
            <div style={{ height: '400px', width: '800px' }}>
                <LineChart
                    data={data}
                    xAxisLabel="Month"
                    yAxisLabel="Mentions"
                />
            </div>
            <div style={{ height: '400px', width: '800px' }}>
                <LineChart
                    data={mockSentimentData}
                    xAxisLabel="Month"
                    yAxisLabel="Sentiment"
                />
            </div>
            <div style={{ height: '400px', width: '400px' }}>
                <PieChart data={transformedData} />
            </div>
        </div>
    )
}

export default Dashboard
