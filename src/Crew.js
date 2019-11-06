import React from 'react';

const Crew = props => (
    <div>
        <p>{props.crew.name}</p>
        <p>{props.crew.department}</p>
    </div>    
)

export default Crew