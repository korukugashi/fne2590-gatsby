import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "frasne.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
        <section
          className="hero is-primary"
          id="fne2590"
          style={{ position: "relative", marginTop: "-1rem" }}
        >
          <Img
            fluid={data.heroImage.childImageSharp.fluid}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 1,
            }}
            objectFit="cover"
            objectPosition="bottom left"
          />
          <div
            className="hero-body"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="container">
              <div className="columns is-variable is-vcentered is-8">
                <div className="column">
                  <div
                    style={{
                      color: "#fff",
                      padding: "1rem 2rem",
                      zIndex: 2,
                      position: "relative",
                    }}
                  >
                    <p className="has-text-centered">
                      <Link to="/fne-25-90/membres/" className="banner-catch">
                        <span>Fédération départementale des associations</span>
                        <br />
                        <span>
                          de protection de la Nature et de l'environnement
                        </span>
                        <br />
                        <span>du Doubs et du Territoire de Belfort</span>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div
                    style={{
                      background: "#c90c0fee",
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
                        style={{
                          marginRight: "1rem",
                          textDecoration: "none",
                          color: "#c90c0f",
                        }}
                      >
                        Nos actions en 2019
                      </Link>
                      <Link
                        to="/nous-rejoindre/"
                        className="button is-secondary"
                        style={{ textDecoration: "none", color: "#c90c0f" }}
                      >
                        Adhérez et devenez bénévole
                      </Link>
                    </div>
                    <p style={{ fontSize: "0.7rem", fontStyle: "italic" }}>
                      FNE 25-90 est agréée au titre de la protection de
                      l'environnement. Les{" "}
                      <Link to="/nous-rejoindre/">dons et adhésions</Link> sont
                      déductibles de 66% de votre impôt sur les revenus dans la
                      limite de 20% de vos revenus imposables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section"
          style={{ paddingTop: "2rem", background: "#e7e7f2" }}
        >
          <div className="container-fluid">
            <div className="columns">
              <div className="column is-three-quarters">
                <div className="columns home-articles is-multiline">
                  <div className="column is-3">
                    <article>
                      <Link to="/">
                        <img
                          src="https://cdn.pixabay.com/photo/2018/04/03/08/37/mushroom-3286258_960_720.jpg"
                          alt="loup"
                        />
                        <h1>La Champignonnière Terrifortaine</h1>
                      </Link>
                      <div>
                        <date>28 févr. 2020</date>
                      </div>
                      <div>
                        « Approvisionnement en matières premières 100 % durable
                        », « réduction des émissions de carbone », « lutte
                        contre le...{" "}
                      </div>
                    </article>
                  </div>
                  <div className="column is-3">
                    <article>
                      <Link to="/">
                        <img
                          src="https://cdn.pixabay.com/photo/2013/07/19/00/18/splashing-165192_960_720.jpg"
                          alt="loup"
                        />
                        <h1>
                          Débat public : l'eau potable, une affaire de santé
                        </h1>
                      </Link>
                      <div>
                        <date>28 févr. 2020</date>
                      </div>
                      <div>
                        « Approvisionnement en matières premières 100 % durable
                        », « réduction des émissions de carbone », « lutte
                        contre le...{" "}
                      </div>
                    </article>
                  </div>
                  <div className="column is-3">
                    <article>
                      <Link to="/">
                        <img
                          src="https://cdn.pixabay.com/photo/2015/10/12/22/43/fox-985292_960_720.jpg"
                          alt="loup"
                        />
                        <h1>
                          Le dispositif CARELI : CAmpagnol, REnard et LIèvre
                        </h1>
                      </Link>
                      <div>
                        <date>28 févr. 2020</date>
                      </div>
                      <div>
                        « Approvisionnement en matières premières 100 % durable
                        », « réduction des émissions de carbone », « lutte
                        contre le...{" "}
                      </div>
                    </article>
                  </div>
                  <div className="column is-3">
                    <article>
                      <Link to="/">
                        <img
                          src="https://cdn.pixabay.com/photo/2019/09/21/11/10/chicken-4493649_960_720.jpg"
                          alt="loup"
                        />
                        <h1>
                          Opposition au projet de poulailler de 29000 poules à
                          Rigney
                        </h1>
                      </Link>
                      <div>
                        <date>28 févr. 2020</date>
                      </div>
                      <div>
                        « Approvisionnement en matières premières 100 % durable
                        », « réduction des émissions de carbone », « lutte
                        contre le...{" "}
                      </div>
                    </article>
                  </div>
                  <div className="column is-3">
                    <article>
                      <Link to="/">
                        <img
                          src="https://cdn.pixabay.com/photo/2016/02/19/11/23/bicycle-1209682_960_720.jpg"
                          alt="loup"
                        />
                        <h1>
                          Un plan vélo pour Besançon
                        </h1>
                      </Link>
                      <div>
                        <date>28 févr. 2020</date>
                      </div>
                      <div>
                        « Approvisionnement en matières premières 100 % durable
                        », « réduction des émissions de carbone », « lutte
                        contre le...{" "}
                      </div>
                    </article>
                  </div>
                  <div className="column is-3">
                    <article>
                      <Link to="/">
                        <img
                          src="https://cdn.pixabay.com/photo/2019/09/21/11/10/chicken-4493649_960_720.jpg"
                          alt="loup"
                        />
                        <h1>
                          Opposition au projet de poulailler de 29000 poules à
                          Rigney
                        </h1>
                      </Link>
                      <div>
                        <date>28 févr. 2020</date>
                      </div>
                      <div>
                        « Approvisionnement en matières premières 100 % durable
                        », « réduction des émissions de carbone », « lutte
                        contre le...{" "}
                      </div>
                    </article>
                  </div>
                  <div className="column is-3">
                    <article>
                      <Link to="/">
                        <img
                          src="https://cdn.pixabay.com/photo/2019/09/21/11/10/chicken-4493649_960_720.jpg"
                          alt="loup"
                        />
                        <h1>
                          Opposition au projet de poulailler de 29000 poules à
                          Rigney
                        </h1>
                      </Link>
                      <div>
                        <date>28 févr. 2020</date>
                      </div>
                      <div>
                        « Approvisionnement en matières premières 100 % durable
                        », « réduction des émissions de carbone », « lutte
                        contre le...{" "}
                      </div>
                    </article>
                  </div>
                  <div className="column is-3">
                    <article>
                      <Link to="/">
                        <img
                          src="https://cdn.pixabay.com/photo/2019/09/21/11/10/chicken-4493649_960_720.jpg"
                          alt="loup"
                        />
                        <h1>
                          Opposition au projet de poulailler de 29000 poules à
                          Rigney
                        </h1>
                      </Link>
                      <div>
                        <date>28 févr. 2020</date>
                      </div>
                      <div>
                        « Approvisionnement en matières premières 100 % durable
                        », « réduction des émissions de carbone », « lutte
                        contre le...{" "}
                      </div>
                    </article>
                  </div>
                </div>
                <div className="has-text-centered"><a href="/" className="button is-primary">AFFICHER PLUS</a></div>
              </div>
              <div className="column">
                <aside>
                  <article className="box">
                    <h1 className="title">Opération recensement du hérisson</h1>
                    <div className="columns">
                      <div className="column">
                        Aidez-nous à recenser le hérisson pour le protéger !
                      </div>
                      <div className="column is-4">
                        <img
                          src="https://cdn.pixabay.com/photo/2016/10/21/19/45/hedgehog-child-1759027_960_720.jpg"
                          alt="Hérisson"
                        />
                      </div>
                    </div>
                    <div className="has-text-right saira"><Link to="/">Participer &gt; </Link></div>
                  </article>
                  <article
                    className="box has-text-centered"
                    style={{ background: "#c61512" }}
                  >
                    <h1
                      className="title saira"
                      style={{
                        fontSize: "2rem",
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      AGENDA
                    </h1>
                    <div
                      style={{
                        margin: "2rem 0",
                        lineHeight: "4rem",
                        padding: "1.5rem 0 1rem",
                        borderTop: "1px solid #fff",
                        borderBottom: "1px solid #fff",
                      }}
                    >
                      <div
                        className="saira"
                        style={{ fontSize: "5rem", color: "#fff" }}
                      >
                        21
                      </div>
                      <div
                        className="saira"
                        style={{ fontSize: "3rem", color: "#fff" }}
                      >
                        MARS
                      </div>
                    </div>
                    <div style={{ color: "#fff" }}>
                      Journée internationale des forêts : une 7e saison pour
                      célébrer ces milieux d’exception{" "}
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                      <a href="/" className="button">
                        TOUTES LES DATES
                      </a>
                    </div>
                  </article>
                  <article
                    className="box has-text-centered saira"
                    style={{ fontSize: '1.2rem' }}
                  >
                    <a href="">REVUE DE PRESSE : MARS 2020</a>
                  </article>
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
    )}
  />
)

export default IndexPage
