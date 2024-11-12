import React from 'react';
import { ResponsivePie } from '@nivo/pie';

interface PieChartProps {
    averageSentiment: number;
}

const PieChart: React.FC<PieChartProps> = ({ averageSentiment }) => {
    const total = 100;
    const positivePercentage = ((averageSentiment + 1) / 2) * 100;

    // console.log('Sentiment:', averageSentiment);
    // console.log('Positive %:', positivePercentage);
    // console.log('Calculation:', `((${averageSentiment} + 1) / 2) * 100`);

    const negativePercentage = total - positivePercentage;

    const data = [
        {
            id: 'positive',
            label: 'Positive',
            value: Number(positivePercentage.toFixed(1))
        },
        {
            id: 'negative',
            label: 'Negative',
            value: Number(negativePercentage.toFixed(1))
        }
    ];

    return (
        <div style={{ width: '100%', height: '300px' }}>
            <ResponsivePie
                data={data}
                margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
                innerRadius={0.6}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={['#3cb44b', '#e6194b']}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                arcLabelsSkipAngle={10}
                arcLabel={d => `${d.value.toFixed(1)}%`}
                arcLabelsTextColor="#333333"
                theme={{ text: { fontSize: 14 } }}
                animate={true}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 40,
                        itemsSpacing: 20,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 20,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}

export default PieChart;
