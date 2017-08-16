import React from 'react';

const AboutContent = props => {
    let content;
    if (props.display) {
        content = (
            <div style={{ height: '100vh', width: '100vw' }}>
                <h3> About BitJourni </h3>
                <button onClick={props.onClick}>Begin Adventure </button>
            </div>
        );
    } else {
        content = <div />;
    }
    return content;
};

export default AboutContent;
