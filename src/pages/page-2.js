import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Button, Form, Container, Header } from "semantic-ui-react"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Container fluid className="container">
      <Header as="h2">React Google Sheets!</Header>
      <Form className="form">
        <Form.Field>
          <label>Name</label>
          <input placeholder="Enter your name" />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input placeholder="Enter your age" />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input placeholder="Enter your salary" />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input placeholder="Enter your hobby" />
        </Form.Field>

        <Button color="blue" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
