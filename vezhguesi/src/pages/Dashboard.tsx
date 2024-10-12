import React from 'react'
import LineChart from '../components/LineChart'
import data from '../assets/data/mockData'
import mockSentimentData from '../assets/data/mockSentimentData'

const Dashboard: React.FC = () => {
    return (
        <div className='flex gap-4'>
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
        </div>
    )
}

export default Dashboard
