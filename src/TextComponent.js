import React from 'react'
import WeekDay from './WeekDay'

const TextComponent = ({text}) => (
    <div>
        <h1>
            This component renders WeekDay component with different props.number: 
            <WeekDay number={text} />
        </h1>
    </div>
)

export default TextComponent 