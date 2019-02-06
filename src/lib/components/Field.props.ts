type Field = 'text' | 'number' | 'radio' | 'checkbox' | 'button' | 'image' | 'password' | 'search' | 'tel' | 'email' | 'hidden';

interface FieldProps {
    type: Field;
    name: string;
    title?: string;
    value: string;
    validation?: boolean;
    suggestions?: string[];
    readOnly?: boolean;
    onChange(event: any): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onKeyUp(event: any): void;
}

export default FieldProps;
