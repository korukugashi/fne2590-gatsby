import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page non trouvée" />
    <h1>Page non trouvée</h1>
    <p>Malheureusement, nous n'avons pas pu trouver la page que vous recherchez.</p>
  </Layout>
)

export default NotFoundPage
