import React from 'react';
import BookletComponent from 'booklet-react-component';

const Booklet = props => {
    let content;
    if (props.display) {
        content = (
            <BookletComponent
                index={props.index}
                flipPageIndex={props.flipPageIndex}
                nextPage={props.nextPage}
                prevPage={props.previousPage}
                pages={[<div>Comp</div>]}
            />
        );
    } else {
        content = <div />;
    }
    return content;
};
export default Booklet;
