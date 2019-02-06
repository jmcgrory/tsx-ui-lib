import React from 'react';
import TableCell from './TableCell';
import TableRowProps from "./TableRow.props";

const TableRow = ({ columns } : TableRowProps) => {

    const getColumns = () => {
        return columns.map((column) => <TableCell {...column} />);
    }

    return <div className={'tr'}>{getColumns()}</div>;

}

export default TableRow;
