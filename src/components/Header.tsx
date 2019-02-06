import React from 'react';

import HeaderProps from "./Header.props";
import Heading from "./Heading";
import ClassMap from "../utility/ClassMapClassMap";

const Header = ({ heading, icon, children, className }: HeaderProps) => {

    const classes = new ClassMap({
        'header': true,
    });

    if (typeof className === 'string') {
        classes.fromString(className);
    }

    return <header className={classes.toString()}>
        { icon }
        <Heading {...heading}/>
        {children}
    </header>;

}

export default Header;
