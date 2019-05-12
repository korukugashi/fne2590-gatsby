import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MentionsLegales = () => (
  <Layout>
    <SEO 
        title="Mentions légales"
        description="FNE 25-90, Fédération des associations de protection de la Nature"
    />
    <section className="section">
        <div className="container">
            <h1>Mentions légales</h1>
            <h2>Éditeur</h2>
            <p><strong><Link to="/">FNE 25-90</Link>, Fédération des associations de protection de la Nature</strong></p>
            <p>
                Agrément Protection de la Nature - n°2125 - Agrément Jeunesse et Sport n°25-JEP-04-53 - Agrément Éducation Nationale
                <br />
                N° SIRET : 330 394 370 000 36 - Code APE : 9499Z
            </p>
            <p>
                Maison de l'environnement de Bourgogne Franche-Comté
                <br />
                7 rue Voirin 25000 Besançon / Tél. 03 81 61 36 44
            </p>
            <h2>Hébergeur</h2>
            <p>
                OVH
                <br />
                2 rue Kellermann - 59100 Roubaix
                <br />
                TVA Intracommunautaire FR52801760950
            </p>
        </div> 
    </section>
  </Layout>
)

export default MentionsLegales