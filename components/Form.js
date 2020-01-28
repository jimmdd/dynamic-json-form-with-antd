import React, { useState, useReducer, useContext } from 'react';
import { Form, Input } from 'antd';
import fieldMapping from '../functions/fieldMapping';

function onChangeReducer(state, action) {
    state.fields[action.index].answered = action.value
    return { fields: state.fields }

}
export const DynamicForm = Form.create({ name: 'DynamicForm' })((props) => {
    // generic onChange function to control values
    const [state, dispatch] = useReducer(onChangeReducer, { fields: props.fields });

    const { getFieldDecorator } = props.form;
    //default layout
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    return (
        <Form {...(props.itemLayout || formItemLayout)}>
            {
                props.fields.map((d, i) =>
                    <Form.Item
                        key={d.key}
                        label={d.label}
                        hasFeedback
                    >
                        {
                            getFieldDecorator(d.key, {
                                initialValue: d.defaultValue,
                                rules: d.rules
                            })(fieldMapping(d))
                        }
                    </Form.Item>
                )

            }
        </Form>
    )
});