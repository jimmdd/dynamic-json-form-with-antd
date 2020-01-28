import React, { useState, useEffect } from 'react';
import { Form, Input } from 'antd';
import fieldMapping from '../functions/fieldMapping';

export const DynamicForm = Form.create({ name: 'DynamicForm' })((props) => {
    // const [count, setCount] = useState(0);
    const { getFieldDecorator } = props.form;
    const formItemLayout = {
        // labelCol: {
        //     xs: { span: 24 },
        //     sm: { span: 8 },
        // },
        // wrapperCol: {
        //     xs: { span: 24 },
        //     sm: { span: 16 },
        // },
    };
    return (
        <Form {...formItemLayout}>
            {
                props.fields.map(d =>
                    <Form.Item key={d.key} label={d.label}>
                        {getFieldDecorator(d.key, {
                            initialValue: d.defaultValue,
                            rules: d.rules
                        })(fieldMapping(d))}
                    </Form.Item>
                )

            }
        </Form>
    )
});