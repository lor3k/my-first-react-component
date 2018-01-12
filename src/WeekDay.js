import React from 'react'

const WeekDay = ({number}) => (
    <div>
            {number === 5 ? "It is friday today! " : "It is not a friday yet. Sad!"}
    </div>
)

export default WeekDay 