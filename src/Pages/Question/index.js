import React from 'react';

const Question = ({route}) => {

    return (
        <div>
            question {route.match.params.id}
        </div>
    );
};

export default Question;
