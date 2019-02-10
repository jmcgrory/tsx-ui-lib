import React from 'react';
import HeadingProps from "./Heading.props";

const Heading = ({ title, level = 1 } : HeadingProps) => {
    const attributes = {
        className: 'heading',
        children: title,
    }
    switch(level){
        case 6:
            return <h6 {...attributes } />;
            break;
        case 5:
            return <h5 {...attributes } />;
            break;
        case 4:
            return <h4 {...attributes } />;
            break;
        case 3:
            return <h3 {...attributes } />;
            break;
        case 2:
            return <h2 {...attributes } />;
            break;
        default:
            return <h1 {...attributes } />;
            break;
    }
}

export default Heading;
