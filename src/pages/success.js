import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Button } from "../components/common/Button"

const Success = () => (
  <Layout>
    <h1
      style={{
        textAlign: `center`,
        marginBottom: `2em`,
      }}
    >
      Form successfully submitted!
    </h1>
    <Link to="/log/">
      <Button>Back to Logging Form</Button>
    </Link>{" "}
    <br />
  </Layout>
)

export default Success
