import { InputNumber, Input, Checkbox, Radio, Icon } from 'antd';
/**
 * 
 * @param {QuestionObj} data
 * @return {Component} Promise<Component> 
 */
function fieldMapping(data) {
    const addons = {
        prefix: data.prefix ? <Icon type={data.prefix} style={data.styles.prefixStyle} /> : null,
        suffix: data.suffix ? <Icon type={data.suffix} style={data.styles.suffixStyle} /> : null
    }
    switch (data.type) {
        case 'number':
            return (
                <InputNumber
                    style={data.styles.style}
                    min={data.min}
                    max={data.max}
                    {...addons}
                // onChange={onChange}
                // value={value}
                />
            );
        case 'string':
            return (
                <Input
                    placeholder={data.placeholder || data.label}
                    style={data.styles.style}
                    {...addons}

                />
            );
        case 'text':
            return (
                <Input.TextArea
                    style={data.styles.style}
                    rows={4}
                    {...addons}

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