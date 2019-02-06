import React from 'react';
import ListItemProps from "./ListItem.props";

const ListItem = ({ text, icon, id }: ListItemProps) => {

    return <li key={id} className={'list-item'}>
        {  typeof icon !== 'undefined' &&
            <span className={'list-item-content list-item-icon'}>
                { icon }
            </span>
        }
        <span className={'list-item-content'}>{ text }</span>
    </li>;

}

export default ListItem;
