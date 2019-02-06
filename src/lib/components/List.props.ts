import ListItemProps from "./ListItem.props";

interface ListProps {
    ordered?: boolean;
    items?: ListItemProps[];
    isPlain?: boolean;
    id: string;
}

export default ListProps;
