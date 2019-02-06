import React from 'react';
import TableCellProps from "./TableCell.props";

const TableCell = ({text, icon}: TableCellProps) => {
    return <div className={'td'}>
        {
            typeof icon !== 'undefined' &&
            <span className={'td-icon'}>
                { icon }
            </span>
        }
        <span className={'td-content'}>{ text }</span>
    </div>;
}

export default TableCell;
