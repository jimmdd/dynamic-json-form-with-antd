// import fetch from 'isomorphic-unfetch'
import { CustomLayout as Layout } from '../components/Layout';
import { DynamicForms as Form } from '../components/Form';

const Index = ({ people }) => (

  <Layout>
    <Form></Form>
  </Layout>
)

// Index.getInitialProps = async () => {
//   const response = await fetch('http://localhost:3000/api/')
//   const people = await response.json()

//   return { people }
// }

export default Index