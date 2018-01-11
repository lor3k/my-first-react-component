import React from 'react';

const MyFirstComponent = ({name, showName}) => (
        <h2>
            Hello {
            showName ?
                name
                :
                null
        }
        </h2>
)

export default MyFirstComponent