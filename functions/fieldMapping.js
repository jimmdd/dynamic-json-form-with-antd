import { InputNumber, Input, Checkbox, Radio, Icon } from 'antd';
/**
 * 
 * @param {QuestionObj} data
 * @return {Component} Promise<Component> 
 */
function fieldMapping(data) {
    switch (data.type) {
        case 'number':
            return (
                <InputNumber
                    style={data.styles.style}
                    min={data.min}
                    max={data.max}
                // onChange={onChange}
                // value={value}
                />
            );
        case 'string':
            return (
                <Input
                    placeholder={data.placeholder || data.label}
                    style={data.styles.style}
                    prefix={data.prefix ? <Icon type={data.prefix} style={data.styles.prefixStyle} /> : null}
                    suffix={data.suffix}

                />
            );
        case 'text':
            return (
                <Input.TextArea
                    style={data.styles.style}
                    rows={4}

                />
            );
        case 'checkbox':
            return (
                <Checkbox
                    style={data.styles.style}

                />
            );
        case 'radio':
            return (
                <Radio
                    style={data.styles.style}

                />
            );
        default:
            throw new Error();

    }
}

export default fieldMapping;