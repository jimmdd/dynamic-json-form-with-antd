import React, { useState, useEffect } from 'react';
import { Form, Input } from 'antd';
import { FormItem } from './FormItem';

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
    // useEffect(() => {
    //     function handleSubmit(form) {
    //         console.log('test', form);
    //     }
    // })

    // const sections = props.schema.sections;
    // console.log('sec', sections);
    const rules = [
        {
            type: 'email',
            message: 'The input is not valid E-mail!',
        },
        {
            required: true,
            message: 'Please input your E-mail!',
        },
    ]
    return (
        <Form {...formItemLayout}>
            <FormItem
                form={props.form}
                id="email-test"
                type="email"
                label="email"
                rules={rules}
            >
                <Input></Input>
            </FormItem>
        </Form>
    )
});