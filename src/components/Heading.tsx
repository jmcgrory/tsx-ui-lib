import React from 'react';
import HeadingProps from "./Heading.props";

const Heading = ({ title, level = 1 } : HeadingProps) => {
    const Tag = `h${level}`;
    return <Tag className={'heading'}>{ title }</Tag>;
}

export default Heading;
