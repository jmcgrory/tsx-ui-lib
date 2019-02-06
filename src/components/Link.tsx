import React from 'react';

import LinkProps from "./Link.props";

const Link = ({
    children,
    href,
    title = 'Clickable Link'
}: LinkProps): JSX.Element => {

    const attributes = {
        title: title,
        className: 'link',
    }

    return <a href={href} {...attributes}>{ children }</a>;

}

export default Link;
