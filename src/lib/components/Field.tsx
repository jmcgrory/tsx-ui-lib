import React, { Component } from 'react';

import FieldProps from "./Field.props";
import ClassMap from "../utilities/ClassMap";

const Field = ({
    type = 'text',
    name,
    title,
    value,
    validation = false,
    suggestions = [],
    onChange,
} : FieldProps) => {

    const attributes = {
        name: name,
        value: value,
        key: name,
        onChange: onChange,
    };

    const fieldType = `field-type-${type}`;

    const fieldContainerClasses = new ClassMap({
        'container': true,
        [fieldType]: true
    });

    const fieldClasses = new ClassMap({
        'field': true,
        'field-validation': validation
    });

    const fieldSuggestions = (): JSX.Element[] => {
        return suggestions.map((suggestion) => {
            return <span className={'field-suggestion'}>[SUGGESTION]</span>
        })
    }

    return <div className={fieldContainerClasses.toString()}>
        <label className={'field-label'}>
            { typeof title !== 'undefined' &&
                <span>{ title }</span>
            }
            <div className={fieldClasses.toString()}>
                <input type={'text'} {...attributes} />
                {
                    suggestions.length > 0 &&
                    <div className={'field-suggestions'}>
                        {fieldSuggestions}
                    </div>
                }
            </div>
        </label>
    </div>;

}

export default Field;
