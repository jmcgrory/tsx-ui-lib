import React from 'react';

import NavProps from "./Nav.props";
import ClassMap from "../utility/ClassMap";
import Heading from "./Heading";
import List from "./List";

const Nav = ({ id, heading = null, items = [] }: NavProps) => {

    const navigationType = `navigation-${id}`;

    const navClasses = new ClassMap({
        [navigationType]: true,
        'navigation': true
    });

    const attributes = {
        role: 'navigation',
        id: id,
        key: id,
        className: navClasses.toString()
    }

    return <nav {...attributes}>
        {
            heading !== null &&
                <Heading {...heading}/>
        }
        <List items={items} id={navigationType} isPlain={true}/>
    </nav>;

}

export default Nav;
