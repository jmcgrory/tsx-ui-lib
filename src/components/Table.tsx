import React from 'react';

import TableRow from './TableRow';
import TableProps from "./Table.props";

const Table = ({ columns = [], rows = [] }: TableProps) => {

    // const columnCount = columns.length;

    const getBody = () => {
        return rows.map((columns) => {
            <TableRow {...columns}/>;
        });
    }

    return <div className={'table'}>
        <div className={'thead'}><TableRow columns={columns}/></div>
        <div className={'tbody'}>{getBody()}</div>
    </div>;

}

export default Table;
