import React from 'react';
import {useParams} from "react-router-dom";

const Question = () => {
    let {id} = useParams();
    return (
        <div>
            question {id}
        </div>
    );
};

export default Question;
