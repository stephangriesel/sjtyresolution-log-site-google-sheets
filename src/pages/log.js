import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Seo from "../components/seo"
import InfoForm from "../components/InfoForm"

const Log = () => (
  <Layout>
    {/* <Seo title="Page two" /> */}
    <InfoForm />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Log
