import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { ReactComponent as MouvementFNE } from "../../../images/le-mouvement-fne.svg"
import { ReactComponent as Puzzle } from "../../../images/puzzle.svg"
import { ReactComponent as Humans } from "../../../images/humans.svg"

const FNE = () => (
  <Layout>
    <SEO 
        title="Le mouvement France Nature Environnement pour la protection de la nature"
        description="France Nature Environnement, fédération des associations de protection de la nature et de l'environnement. Porte parole de 3500 associations sur tout le territoire français, en métropole et outre-mer."
    />
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h1>Le mouvement FNE</h1>
        <MouvementFNE />
        <div className="columns" style={{ margin: '4rem 0' }}>
          <div className="column columns is-vcentered">
            <div>
              <div className="sohoma" style={{ fontSize: '1.8rem' }}>«&nbsp;STOPPER LES CAUSES D'ÉROSION DE LA BIODIVERSITÉ ET LA <strong>SUREXPLOITATION DES RESSOURCES</strong>&nbsp;»</div>
              <p>Se mobiliser contre la destruction et pour la restauration des écosystèmes marins et terrestres.</p>
            </div>
          </div>
          <div className="column columns is-centered">
            <div style={{ width: '100%', maxWidth: 530 }}>
              <StaticQuery
                  query={graphql`
                    query {
                      placeholderImage: file(relativePath: { eq: "terre-surexploitee.png" }) {
                        childImageSharp {
                          fluid(maxWidth: 530) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  `}
                  render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Terre surexploitée" />}
                />
              </div>
          </div>
        </div>
        <div className="columns">
          <div className="column columns is-centered">
            <Puzzle  style={{ maxWidth: 530 }} />
          </div>
          <div className="column columns is-vcentered">
            <div>
              <div className="sohoma" style={{ fontSize: '1.8rem' }}>«&nbsp;PROTÉGER L’HOMME ET PARTICIPER A <strong>LA VIE DÉMOCRATIQUE</strong>&nbsp;»</div>
              <p>Appliquer des principes de prévention, de précaution et de responsabilité, autour d'un dialogue environnemental et l'élaboration de politiques cohérentes.</p>
            </div>
          </div>
        </div>
        <div className="columns" style={{ margin: '4rem 0' }}>
          <div className="column columns is-vcentered">
            <div>
              <div className="sohoma" style={{ fontSize: '1.8rem' }}>«&nbsp;ACCOMPAGNER LES CHANGEMENTS POUR UN <strong>NOUVEAU MODÈLE DE DÉVELOPPEMENT</strong>&nbsp;»</div>
              <p>Ensemble, réinventons nos modes de vie : production, consommation, transition énergétique...</p>
            </div>
          </div>
          <div className="column columns is-centered">
            <Humans style={{ maxWidth: 530 }} />
          </div>
        </div>
      </div>
      <div className="has-text-centered sohoma" style={{ fontSize: '1.6rem' }}>
        <p>Vous voulez en apprendre plus sur l’organisation FNE ?</p>
        <p>N’hésitez pas à visiter les sites web national et régional :</p>
        <p><a href="https://www.fne.asso.fr/">www.fne.asso.fr</a></p>
        <p><a href="http://fne-bfc.fr/">fne-bfc.fr</a></p>
      </div>
    </section>
    
  </Layout>
)

export default FNE
