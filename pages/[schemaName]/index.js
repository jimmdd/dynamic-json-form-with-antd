import fetch from 'isomorphic-unfetch'
import React from 'react';
import uuid from 'uuid/v4';
import { CustomLayout as Layout } from '../../components/Layout';
import { DynamicForm as Form } from '../../components/Form';

const Index = ({ schema }) => (
    <Layout>
        <Form
            id={uuid()}
            fields={schema.fields}
        ></Form>
    </Layout>
)

Index.getInitialProps = async (ctx) => {
    console.log('context', ctx.query, ctx.asPath, ctx.err);
    const { schemaName } = ctx.query
    const res = await fetch(`http://localhost:3000/api/getSchema/${schemaName}`);
    const errorCode = res.statusCode > 200 ? res.statusCode : false
    const schema = await res.json();
    console.log('schema', schema)
    return { errorCode, schema }
}

export default Index