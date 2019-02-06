import React, { Component } from 'react';
import FormProps from "./Form.props";
import FormState from "./Form.state";
import FieldProps from "./Field.props";
import Field from "./Field";
import ClassMap from "../utility/ClassMapClassMap";
import Header from "./Header";

class Form extends Component<FormProps, FormState> {

    constructor(props: FormProps){
        super(props);
        this.state = {
            fields: props.fields,
            notices: props.notices,
            hasValidation: this.isValid(props.fields),
        }
    }

    private isValid = (fields: FieldProps[]): boolean => {
        return fields.some(({ validation }) => {
            return (validation !== null && typeof validation !== 'undefined');
        });
    }

    private getFields = (): JSX.Element[] => {
        return this.state.fields.map((field: FieldProps) => {
            return <Field {...field}/>
        });
    }

    private getFormClasses = (): string => {
        return new ClassMap({
            'form': true,
            'form-validation': this.state.hasValidation,
        }).toString();
    }

    render(): React.ReactNode {

        const { header, id } = this.props;

        const attributes = {
            className: this.getFormClasses(),
            key: id,
            id: id,
        }

        return <form {...attributes}>
            { typeof header !== 'undefined' && <Header {...header} /> }
            { this.getFields() }
        </form>;

    }


}

export default Form;
