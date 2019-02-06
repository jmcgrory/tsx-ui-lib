import FieldProps from "./Field.props";

interface FormState {
    hasValidation: boolean;
    fields: FieldProps[];
    notices: any[]; // TODO: Notice Component Props
}

export default FormState;
