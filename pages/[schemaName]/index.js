import fetch from 'isomorphic-unfetch'
import React from 'react';
import { CustomLayout as Layout } from '../../components/Layout';
import { DynamicForm as Form } from '../../components/Form';

const Index = ({ schema }) => (
    <Layout>
        <Form
            schema={schema}
        ></Form>
    </Layout>
)

Index.getInitialProps = async (ctx) => {
    console.log('context', ctx.query, ctx.asPath, ctx.err);
    const res = await fetch(`http://localhost:3000/api/getSchema${ctx.asPath}`);
    const errorCode = res.statusCode > 200 ? res.statusCode : false
    const schema = await response.json();
    console.log('schema', schema)
    return { errorCode, schema }
}

export default Index