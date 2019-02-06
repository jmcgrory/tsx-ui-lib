import ListItemProps from "./ListItem.props";
import HeadingProps from "./Heading.props";

interface NavProps {
    id: string;
    heading?: HeadingProps;
    items?: ListItemProps[];
}

export default NavProps;
