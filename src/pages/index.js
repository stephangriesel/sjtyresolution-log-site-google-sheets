import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Button } from "../components/common/Button"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="SJ Tyre Solution" />
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
