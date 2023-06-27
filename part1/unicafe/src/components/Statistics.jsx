import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({allClicks, value: {good, neutral, bad, all}}) => {
    console.log(allClicks)
    if(good <= 0 ){
        return <p>No feedback given</p>
    }

  return (
    <div>
        <StatisticLine text="good" value={good}  />
        <StatisticLine text="neutral" value={neutral}  />
        <StatisticLine text="bad" value={bad}  />
        <StatisticLine text="all" value={all}  />
    </div>
  )
}

export default Statistics