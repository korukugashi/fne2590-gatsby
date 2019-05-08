import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { ReactComponent as LogoFacebook } from "../../images/facebook.svg"

const Contact = () => (
  <Layout>
    <SEO 
        title="Contacter FNE 25-90"
        description="Retrouvez FNE 25-90 à son antenne de Belfort et Besançon"
    />
    <div className="has-text-centered">
        <div className="container is-fluid">
            <div className="columns is-centered">
                <h1 style={{ margin: `2rem` }}>
                    <StaticQuery
                        query={graphql`
                          query {
                            file(relativePath: { eq: "nous-contacter.png" }) {
                              childImageSharp {
                                fixed(width: 304, height: 91) {
                                  ...GatsbyImageSharpFixed
                                }
                              }
                            }
                          }
                        `}
                        render={data => <Img fixed={data.file.childImageSharp.fixed} alt="Nous contacter" />}
                    />
                </h1>
            </div>
            
        </div>
        <div className="hero is-primary">
            <div className="hero-body">
                <div className="container is-fluid">
                    <div className="columns">
                        <address className="column">
                            <h2>Antenne FNE de Besançon</h2>
                            <p>C/O Maison de l’environnement de Franche-Comté</p>
                            <p>7 rue Voirin<br />25000 Besançon</p>
                            <div><span className="has-text-weight-bold">Tél :</span> 03 81 61 36 44</div>
                            <div><span className="has-text-weight-bold">Email :</span> <a href="mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#050;&#053;&#064;&#102;&#110;&#101;&#050;&#053;&#057;&#048;&#046;&#111;&#114;&#103;">&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#050;&#053;&#064;&#102;&#110;&#101;&#050;&#053;&#057;&#048;&#046;&#111;&#114;&#103;</a></div>
                        </address>
                        <address className="column">
                            <h2>Antenne FNE de Belfort</h2>
                            <p>132 avenue Jean-Jaurès<br />90 000 Belfort</p>
                            <div><span className="has-text-weight-bold">Tél :</span> 09 51 19 58 80</div>
                            <div><span className="has-text-weight-bold">Email :</span> <a href="mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#057;&#048;&#064;&#102;&#110;&#101;&#050;&#053;&#057;&#048;&#046;&#111;&#114;&#103;">&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#057;&#048;&#064;&#102;&#110;&#101;&#050;&#053;&#057;&#048;&#046;&#111;&#114;&#103;</a></div>
                        </address>
                    </div>
                </div>
            </div>
        </div>

        <section className="section">
            <h2>Horaires d'accueil</h2>
            <div><span className="has-text-weight-bold">Horaires :</span> du lundi au vendredi de 9h à 12h et de 14h à 17h.</div>
            <div><span className="has-text-weight-bold">Note :</span>  en cas de déplacement ou de réunion à l'extérieur, le bureau sera fermé.</div>
            <div><span className="has-text-weight-bold">Permanences Linky (Belfort) :</span> tous les mercredis de 9h à 11h et les vendredis de 15h à 17h</div>
        </section>

        <section>
            <h2>Retrouvez-nous sur les réseaux sociaux</h2>
            <div className="columns is-centered">
                <a href="https://www.facebook.com/France-Nature-Environnement-du-Doubs-1521967594737213/">
                    <figure style={{ padding: '1rem' }}>
                        <LogoFacebook style={{ width: 24, height: 24 }} />
                        <figcaption>FNE 25</figcaption>
                    </figure>
                </a>
                <a href="https://fr-fr.facebook.com/fne90/" >
                    <figure style={{ padding: '1rem' }}>
                        <LogoFacebook style={{ width: 24, height: 24 }} />
                        <figcaption>FNE 90</figcaption>
                    </figure>
                </a>
            </div>
        </section>
    </div>
  </Layout>
)

export default Contact
