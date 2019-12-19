import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>This is some basic stuff.</p>
            <p>My Username is {props.username}</p>
        </div>
    )
}

export default userOutput;