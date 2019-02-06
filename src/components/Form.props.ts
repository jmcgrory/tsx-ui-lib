import FieldProps from "./Field.props";
import HeaderProps from "./Header.props";

interface FormProps {
    id: string;
    header?: HeaderProps;
    fields: FieldProps[];
    notices: any[]; // TODO: Notice Component Props
}

export default FormProps;
