import React, { useState, useEffect } from 'react';
import { Form } from 'antd';

const DynamicForm = (props) => {
    const [count, setCount] = useState(0);
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
    useEffect(() => {
        function handleSubmit(form) {
            console.log('test', form);
        }
    })
    const { getFieldDecorator } = this.props.form;
    return (
        <Form {...formItemLayout}>
            <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                    rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ],
                })(<Input />)}
            </Form.Item>
        </Form>
    )
}

export const DynamicForms = Form.create({ name: 'register' })(DynamicForm);
