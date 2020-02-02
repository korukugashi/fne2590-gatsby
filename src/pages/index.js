import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Drapeaux from "../images/drapeaux.png"
import { ReactComponent as Herisson}  from "../images/herisson.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
    <section
      className="hero is-primary"
      style={{ marginTop: 0 }}
      id="fne2590"
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-variable is-vcentered is-8">
            <div className="column">
            <Herisson id="herisson2" style={{ width: 600, height: 600, bottom: -215, left: -100, position: 'absolute', zIndex: 0 }} />
              <div style={{ color: "#fff", padding: "1rem 2rem", zIndex: 2, position: 'relative' }}>
                <div className="columns">
                  <div className="column is-8 columns has-text-centered is-vcentered">
                    <h1
                      className="saira"
                      style={{
                        color: "#fff",
                        fontSize: 46,
                        lineHeight: "40px",
                        paddingTop: "3rem",
                      }}
                    >
                      FRANCE NATURE ENVIRONNEMENT
                    </h1>
                  </div>
                  <div
                    className="column is-4 is-centered is-vcentered"
                    style={{
                      background: `url(${Drapeaux}) no-repeat center center`,
                      backgroundSize: "contain",
                      marginTop: "1rem",
                    }}
                  ></div>
                </div>
                <p>
                  Fédération départementale des{" "}
                  <Link to="/fne-25-90/membres/">
                    associations de protection de la Nature et de
                    l'environnement du Doubs et du Territoire de Belfort
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="column">
              <div
                style={{
                  background: "#910508",
                  padding: "1rem 2rem",
                }}
              >
                <h2
                  className="saira has-text-centered"
                  style={{ marginTop: 0 }}
                >
                  <span style={{ fontSize: 55 }}>Engagez-vous</span>
                  <br />
                  pour la protection de la nature
                  <br />
                  sur votre territoire !
                </h2>
                <div className="has-text-centered columns is-vcentered is-centered">
                  <Link
                    to="/fne-25-90/actions/"
                    className="button is-secondary is-small mr-1"
                    style={{ marginRight: "1rem", textDecoration: "none", color: "#910508" }}
                  >
                    Nos actions en 2019
                  </Link>
                  <Link
                    to="/nous-rejoindre/"
                    className="button is-secondary"
                    style={{ textDecoration: "none", color: "#910508" }}
                  >
                    Adhérez et devenez bénévole
                  </Link>
                </div>
                <p style={{ fontSize: "0.7rem", fontStyle: "italic" }}>
                  FNE 25-90 est agréée au titre de la protection de
                  l'environnement. Les{" "}
                  <Link to="/nous-rejoindre/">
                    dons et adhésions
                  </Link>{" "}
                  sont déductibles de 66% de votre impôt sur les revenus dans la
                  limite de 20% de vos revenus imposables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-three-quarters">
            <h1 className="title">Dernières publications</h1>
            <ul>
              <li>
                <Link to="/">Revue de presse - février 2019</Link>
              </li>
              <li>
                <Link to="/">La Champignonnière Terrifortaine</Link>
              </li>
              <li>
                <Link to="/">
                  Débat public : l'eau potable, une affaire de santé
                </Link>
              </li>
              <li>
                <Link to="/">
                  Cartes vertes : actions locales favorables à l’environnement
                </Link>
              </li>
              <li>
                <Link to="/">Les sites Natura 2000</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <aside>
              <article className="box">
                <h1 className="title">Opération recensement du hérisson</h1>
                <p>Aidez-nous à recenser le hérisson pour le protéger !</p>
                <Link to="/">Participer</Link>
              </article>
              <article className="box"></article>
            </aside>
          </div>
        </div>
      </div>
    </section>
    <script type="application/ld+json">
      {JSON.stringify([
        {
          "@context": "https://schema.org",
          "@id": "https://www.fne2590.org/#fne2590",
          "@type": "NGO",
          name: "FNE 25 90",
          legalName: "France Nature Environnement 25 - 90",
          url: "https://www.fne2590.org",
          logo: "https://www.fne2590.org/logo-fne-25-90.svg",
          description:
            "Fédération départementale des associations de protection de la Nature et de l'environnement du Doubs et du Territoire de Belfort",
          address: [
            {
              "@type": "PostalAddress",
              addressLocality: "Besançon",
              postalCode: "25000",
              streetAddress:
                "Maison de l’environnement de Franche-Comté - 7 rue Voirin",
              telephone: "+33381613644",
            },
            {
              "@type": "PostalAddress",
              addressLocality: "Belfort",
              postalCode: "90000",
              streetAddress: "132 avenue Jean-Jaurès",
              telephone: "+33951195880",
            },
          ],
          sameAs: [
            "https://www.facebook.com/France-Nature-Environnement-du-Doubs-1521967594737213/",
            "https://fr-fr.facebook.com/fne90/",
          ],
        },
      ])}
    </script>
  </Layout>
)

export default IndexPage
