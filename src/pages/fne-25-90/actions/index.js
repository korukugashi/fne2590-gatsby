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
        <h1>Nos actions</h1>
        <h2>Fédérer</h2>
        <div className="media">
          <figure className="media-left is-hidden-mobile">
            <p className="image is-128x128">
              <Federer />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="sohoma has-text-weight-bold">Nous mettons en relation nos associations membres afin de co-construire des actions pour la préservation de l’environnement.</p>
              <p>Nous faisons entendre auprès des pouvoirs publics, des élus, des médias et de la société civile la voix des associations de protection de la nature et de l'environnement réunies dans un même mouvement. Nous affirmons notre culture commune, favorisons les échanges d'idées et le partage de bonnes pratiques, et encourageons le bénévolat. Nous croisons nos analyses et veillons à la cohérence et à la complémentarité des plaidoyers.</p>
            </div>
          </div>
        </div>
        <h2>Accompagner et sensibiliser</h2>
        <div className="media">
          <figure className="media-left is-hidden-mobile">
            <p className="image is-128x128">
              <Accompagner />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="sohoma has-text-weight-bold">Entre professionnels et grand public, nous abordons des thématiques écologiques afin de réinventer un nouveau modèle de développement : production, consommation, transition énergétique...</p>
              <p>Des actions destinées soit aux adultes, aux enfants, à tout public, à des groupes socio-professionnels, à des organisateurs, et qui se déclinent sous différentes formes : animations au sein d’établissements scolaires ou de formation, accueil de groupes à la maison de l’environnement, sur des stands lors de manifestations, en sorties natures, réunions débats, expertises auprès de professionnels...</p>
            </div>
          </div>
        </div>
        <h2>Veille environnementale</h2>
        <div className="media">
          <figure className="media-left is-hidden-mobile">
            <p className="image is-128x128">
              <Veille />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="sohoma has-text-weight-bold">Nous sommes constamment à la recherche de l’actualité environnementale de nos territoires afin d’en informer les citoyens et d’intervenir en cas de problèmes.</p>
              <p>Pour mieux protéger la nature et l'environnement, il est indispensable d'en saisir la complexité. Présents sur le terrain, militants et indépendants, nous menons un travail de fond. Notre capacité d’expertise nourrit nos positions. Nous partageons nos connaissances, pour que chacun détienne les clés du débat environnemental, nous informons les citoyens et menons des actions ciblées de sensibilisation. Nous encourageons et valorisons l'engagement associatif.</p>
            </div>
          </div>
        </div>
        <h2>Débat public</h2>
        <div className="media">
          <figure className="media-left is-hidden-mobile">
            <p className="image is-128x128">
              <StaticQuery
                query={graphql`
                  query {
                    file(relativePath: { eq: "debat-public.png" }) {
                      childImageSharp {
                        fixed(width: 128, height: 86) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                `}
                render={data => <Img fixed={data.file.childImageSharp.fixed} alt="Débat public" />}
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="sohoma has-text-weight-bold">Nous offrons la possibilité de construire un débat citoyen autour des thématiques environnementales.</p>
              <p>Dans une société démocratique, l'intérêt général est à préserver de tout intérêt privé ou personnel. A travers l'existence d'un débat public, le mouvement citoyen, dont le réseau des associations investi dans la protection de l'environnement fait partie, doit pouvoir s'exprimer et être entendu. C'est dans cet esprit que le plateau débat public s'est créé.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </Layout>
)

export default Actions
