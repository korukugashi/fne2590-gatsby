import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { ReactComponent as Federer } from "../../../images/federer.svg"
import { ReactComponent as Accompagner } from "../../../images/accompagner.svg"
import { ReactComponent as Veille } from "../../../images/veille.svg"

const Actions = () => (
  <Layout>
    <SEO 
        title="Les actions menées par FNE 25 90"
        description="FNE 25-90 a pour rôle de fédérer les acteurs pour l'environnement, accompagner et sensibiliser le public, réaliser la veille environnementale et organiser le débat public"
    />
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h1>Nos actions en 2019-2020</h1>
        <h2>Chantiers bénévoles</h2>
        <ul>
          <li>plantations de haies (programme <a href="http://fne-bfc.fr/biodiversithaies/">Biodiversit’haies</a>)</li>
          <li>récoltes <a href="http://fne-bfc.fr/vegetal-local-_-le-bilan-des-recoltes-2019/">végétal local</a></li>
        </ul>
        <h2>Animations, tenue de stands</h2>
        <ul>
          <li>Fête de la science</li>
          <li>Journée du Patrimoine</li>
          <li>Marché "Vert et Solidaire" à Besançon</li>
          <li>Marché bio à Le Belieu</li>
        </ul>
        <h2>Participation aux concertations publiques, communiqués de presse</h2>
        <ul>
          <li>RN57 Contournement de Besançon entre Beure et Micropolis</li>
          <li>Zone de Marchaux</li>
          <li>poulaillers industriels de Flangebouche et Rigney</li>
        </ul>
        <h2>Débat public</h2>
        <ul>
          <li>l'eau potable, l'affaire de tous (3 octobre 2019)</li>
          <li>conférence-Débat Agriculture eau et ville (12 février 2019)</li>
        </ul>
        <h2>Commissions</h2>
        <ul>
          <li>CODERST</li>
          <li>CDOA</li>
          <li>CDPENAF</li>
        </ul>
        <h2>Groupes de travail</h2>
        <ul>
          <li>Urbanisme</li>
          <li>Agriculture, santé et environnement</li>
        </ul>
        <h2>Actions en justice</h2>
        <ul>
          <li>Jardins des Vaites</li>
        </ul>
        <h2>Economie circulaire</h2>
        <ul>
          <li>La Champignonnière Terrifortaine</li>
        </ul>
        <h2>Veille écologique</h2>
        <ul>
          <li>Revue de presse</li>
        </ul>
      </div>
    </section>
    
  </Layout>
)

export default Actions
