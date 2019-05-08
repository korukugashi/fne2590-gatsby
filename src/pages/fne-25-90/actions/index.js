import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const Actions = () => (
  <Layout>
    <SEO 
        title="Les actions menées par FNE 25 90"
        description="FNE 25-90 a pour rôle de fédérer les acteurs pour l'environnement, accompagner et sensibiliser le public, réaliser la veille environnementale et organiser le débat public"
    />
    <section className="section">
      <div className="container-fluid has-text-centered">
        <h1>Nos actions</h1>
        <h2>Fédérer</h2>
        <h2>Accompagner et sensibiliser</h2>
        <h2>Veille environnementale</h2>
        <h2>Débat public</h2>
      </div>
    </section>
    
  </Layout>
)

export default Actions
