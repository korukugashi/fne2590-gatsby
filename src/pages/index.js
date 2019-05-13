import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ReactComponent as Slogan } from "../images/slogan.svg"
import { ReactComponent as SloganBg } from "../images/slogan-bg.svg"
import { ReactComponent as BandeauRouge } from "../images/bandeau-rouge.svg"
import Drapeaux from "../images/drapeaux.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="columns">
          <div className="column is-three-quarters">
            <div className="columns">
              <div className="column">
                <h1>
                  <div style={{ width: '100%', maxWidth: 525, position: 'relative' }}>
                    <Slogan className="sohoma" style={{ width: '100%', zIndex: 2, position: 'relative' }} />
                    <SloganBg style={{ 
                      width: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 1
                    }} />
                  </div>
                </h1>
              </div>
              
              <div className="column">
                <p>FNE 25-90, association loi 1901 adhérente au {' '}
                  <Link to="/fne-25-90/fne/">réseau national</Link> de France Nature Environnement, est{' '}
                  <strong>
                    <Link to="/fne-25-90/">la fédération départementale</Link> des associations de protection de la Nature 
                    et de l'environnement du Doubs et du Territoire de Belfort.
                  </strong>
                </p>
              </div>
            </div>
            <div className="saira columns is-centered is-vcentered is-hidden-touch" style={{
              position: 'relative',
              color: '#fff',
              fontSize: 46,
              lineHeight: '40px',
              padding: '1.5rem',
              margin: '1rem 0 1rem',
            }}>
              <div style={{ 
                height: 200,
                width: 300,
                position: 'absolute',
                right: 0,
                top: -150,
                background: `url(${Drapeaux}) no-repeat center center`,
              }} className="is-hidden-desktop-only" />
              <BandeauRouge className="column" style={{ 
                position: 'absolute',
                zIndex: -1,
                width: '100%',
              }} />
              <div>FRANCE NATURE<br />ENVIRONNEMENT</div>
              <div style={{ margin: '1rem' }}>–</div>
              <div style={{ fontSize: 70 }}>25 &amp; 90</div>
            </div>

            <div className="columns saira" id="fne2590" style={{ fontSize: '1.2rem' }}>
              <section className="column has-text-centered">
                <h2>Antenne FNE de Besançon</h2>
                <div>C/O Maison de l’environnement de Franche-Comté</div>
                <div style={{ fontSize: '1.6rem' }}>7 rue Voirin – 25000 Besançon</div>
                <div>Tél : 03 81 61 36 44</div>
              </section>
              <section className="column has-text-centered">
                <h2>Antenne FNE de Belfort</h2>
                <div style={{ fontSize: '1.6rem' }}>132 avenue Jean-Jaurès – 90 000 Belfort</div>
                <div>Tél : 09 51 19 58 80</div>
              </section>
            </div>
          </div>
          <div className="column">
            <aside>
              <article className="box">
                <h1 className="title">Opération recensement du hérisson</h1>
                <p>Aidez-nous à recenser le hérisson pour le protéger !</p>
                <Link to="/">Participer</Link>
              </article>
              <article className="box">
                <h1 className="title">Dernières publications</h1>
                <ul>
                  <li><Link to="/">Revue de presse - février 2019</Link></li>
                  <li><Link to="/">La Champignonnière Terrifortaine</Link></li>
                  <li><Link to="/">Débat public : l'eau potable, une affaire de santé</Link></li>
                  <li><Link to="/">Cartes vertes : actions locales favorables à l’environnement</Link></li>
                  <li><Link to="/">Les sites Natura 2000</Link></li>
                </ul>
              </article>
            </aside>
          </div>
        </div>
      </div>
    </section>
    <script type="application/ld+json">
        {JSON.stringify([{
            "@context": "https://schema.org",
            "@id": "https://www.fne2590.org/#fne2590",
            "@type": "NGO",
            "name": "FNE 25 90",
            "legalName": "France Nature Environnement 25 - 90",
            "url": "https://www.fne2590.org",
            "logo": "https://www.fne2590.org/logo-fne-25-90.svg",
            "description": "Fédération départementale des associations de protection de la Nature et de l'environnement du Doubs et du Territoire de Belfort",
            "address": [{
              "@type": "PostalAddress",
              "addressLocality": "Besançon",
              "postalCode": "25000",
              "streetAddress": "Maison de l’environnement de Franche-Comté - 7 rue Voirin",
              "telephone": "+33381613644",
            }, {
              "@type": "PostalAddress",
              "addressLocality": "Belfort",
              "postalCode": "90000",
              "streetAddress": "132 avenue Jean-Jaurès",
              "telephone": "+33951195880",
            }],
            "sameAs": [
              "https://www.facebook.com/France-Nature-Environnement-du-Doubs-1521967594737213/",
              "https://fr-fr.facebook.com/fne90/",
            ],
        }])}
    </script>
  </Layout>
)

export default IndexPage
