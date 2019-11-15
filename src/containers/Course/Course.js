import React from 'react';

function Course(props) {
    const urlParams = new URLSearchParams(props.location.search);
    console.log(props)
    return (
        <div>
            <h1>{urlParams.get('title')}</h1>
            <p>You Select the course with ID: {props.match.params.id}</p>
        </div>
    );
}

export default Course;