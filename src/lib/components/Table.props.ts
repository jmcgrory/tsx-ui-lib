import TableRowProps from "./TableRow.props";
import TableCellProps from "./TableCell.props";

interface TableProps {
    columns: TableCellProps[];
    rows: TableRowProps[];
}

export default TableProps;
