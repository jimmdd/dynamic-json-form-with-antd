import fetch from 'isomorphic-unfetch'
import React from 'react';
import { CustomLayout as Layout } from '../components/Layout';
import { DynamicForm as Form } from '../components/Form';

const Index = ({ schema }) => (
  // <React.StrictMode>
  <Layout>
    <Form
      schema={schema}
    ></Form>
  </Layout>
  // </React.StrictMode>
)

Index.getInitialProps = async (ctx) => {
  console.log('context', ctx.asPath)
  const response = await fetch('http://localhost:3000/api/schema')
  const schema = await response.json();
  console.log('schema', schema)
  return { schema }
}

export default Index