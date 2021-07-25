import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Button } from "../components/common/Button"

const IndexPage = () => (
  <Layout>
    <h1
      style={{
        textAlign: `center`,
        marginBottom: `2em`,
      }}
    >
      Welcome!
    </h1>
    <Link to="/log/">
      <Button>Log Form</Button>
    </Link>{" "}
    <br />
  </Layout>
)

export default IndexPage
