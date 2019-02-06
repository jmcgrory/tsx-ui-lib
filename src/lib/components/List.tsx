import React from 'react';

import ListItem from './ListItem';
import ListItemProps from "./ListItem.props";
import ListProps from "./List.props";
import Link from './Link';
import ClassMap from "../utility/ClassMap";

const List = ({ ordered = false, items = [], id, isPlain = false }: ListProps) => {

    const classes = new ClassMap({
        'list': true,
        'list-plain': isPlain,
        'list-ordered': !isPlain && ordered,
        'list-unordered': !isPlain && !ordered,
    })

    const itemsMap = items.map((listItem: ListItemProps, index: number) => {
        const key = `${id}-${index}`;
        const item = <ListItem id={key} key={key} {...listItem} />;
        if (typeof listItem.href === 'undefined') return item;
        const linkAttributes = {
            title: `Navigate to ${listItem.text}`,
            key: `link-${key}`,
            href: listItem.href
        }
        return <Link {...linkAttributes}>{ item }</Link>;

    });

    const Tag = ordered ? 'ol' : 'ul';

    return <Tag id={id} className={classes.toString()}>{ itemsMap }</Tag>;

}

export default List;
