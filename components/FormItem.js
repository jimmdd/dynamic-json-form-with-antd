import React from 'react';
import { Form, InputNumber, Input } from 'antd';

export const FormItem = (props) => {
    // type checking
    // assising number prefix
    // assising letter prefix

    return (
        <Form.Item label={props.label}>
            {props.form.getFieldDecorator(props.id, {
                // initialValue: props.data.defaultValue,
                rules: props.rules
            })(props.children)}
        </Form.Item>
    )
}

/**
 * 
 * @param {string} type
 * @return {component} 
 */
function typeMapping(type, data, state, onChange) {
    // Types: number, text, select, fileupload, checkbox, radio, table, string, 
    switch (type) {
        case 'number':
            // need to implement formatter 
            const props = {

            }
            return (
                <InputNumber
                    style={data.style}
                    min={data.min}
                    max={data.max}
                    onChange={onChange}
                    value={data.value}
                />
            )
    }
}