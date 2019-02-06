import HeadingProps from "./Heading.props";
import { Moment } from "moment";

interface HeaderProps {
    heading: HeadingProps;
    icon?: JSX.Element;
    datetime?: Moment;
    children?: JSX.Element | JSX.Element[],
    className?: string,
}

export default HeaderProps;
