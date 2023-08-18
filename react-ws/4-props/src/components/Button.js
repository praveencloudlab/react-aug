import React from 'react';

const Button = (props) => {
    return (
        <span>
            <button>{props.lableName}</button>
        </span>
    );
};

export default Button;