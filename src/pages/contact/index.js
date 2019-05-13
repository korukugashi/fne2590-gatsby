import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { ReactComponent as NousContacter } from "../../images/nous-contacter.svg"
import { ReactComponent as LogoFacebook } from "../../images/facebook.svg"

const Contact = () => (
  <Layout>
    <SEO 
        title="Contacter FNE 25-90"
        description="Retrouvez FNE 25-90 à son antenne de Belfort et Besançon"
    />
    <div className="has-text-centered">
        <section className="section" style={{ paddingTop: 0, paddingBottom: '1rem' }}>
            <div className="container">
                <div className="columns is-centered">
                    <h1 style={{ margin: `0  0 2rem`, width: 304, height: 91, position: "relative", color: "#fff", fontWeight: "bold", fontSize: '2.9rem' }}>
                        <NousContacter style={{ width: 304, position: "absolute", left: 0, top: 0 }} />
                        <div style={{ position: 'absolute', top: 6, left: 10 }}>COMMENT</div>
                        <div style={{ position: 'absolute', color: '#c90c0f', top: 60, left: 10, fontSize: '1.8rem' }}>NOUS</div>
                        <div style={{ position: 'absolute', fontWeight: 'normal', top: 60, left: 108, fontSize: '1.8rem' }}>CONTACTER</div>
                        <div style={{ position: 'absolute', color: '#c90c0f', left: 260, fontSize: '5.8rem' }}>?</div>
                    </h1>
                </div>
            </div>
        </section>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
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
        </section>

        <section className="section">
            <div className="container">
                <h2>Horaires d'accueil</h2>
                <div><span className="has-text-weight-bold">Horaires :</span> du lundi au vendredi de 9h à 12h et de 14h à 17h.</div>
                <div><span className="has-text-weight-bold">Note :</span>  en cas de déplacement ou de réunion à l'extérieur, le bureau sera fermé.</div>
                <div><span className="has-text-weight-bold">Permanences Linky (Belfort) :</span> tous les mercredis de 9h à 11h et les vendredis de 15h à 17h</div>
                <h2 style={{ marginTop: '4rem' }}>Retrouvez-nous sur les réseaux sociaux</h2>
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
            </div>
        </section>
    </div>
  </Layout>
)

export default Contact
