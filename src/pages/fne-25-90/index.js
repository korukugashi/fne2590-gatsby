import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { ReactComponent as TextFC } from "../../images/text-franche-comte.svg"
import { ReactComponent as MapFC } from "../../images/map-franche-comte.svg"

const FNE2590 = () => (
  <Layout>
    <SEO 
        title="FNE 25-90, fédération départementale des associations de protection de la Nature et de l'environnement du Doubs et du Territoire de Belfort"
        description="L’objet de FNE 25-90 est d’agir pour la sauvegarde de ses intérêts dans le domaine de l’environnement, ainsi que pour la défense en justice de l’ensemble de ses membres"
    />
    <h1>L'association FNE 25-90</h1>
    <section className="hero is-primary is-">
      <div className="hero-body">
        <div className="container-fluid has-text-centered">
          <h2>France Nature Environnement 25 - 90 est la fédération départementale<br />des associations de protection de la nature et de l’environnement<br />du Doubs et du territoire de Belfort.</h2>
          <p>Dans le département du <strong>Doubs</strong>, ce sont <strong>27 associations</strong> qui ont décidé de se lier pour faire entendre leur voix et leurs revendications environnementales.</p>
          <p>Dans le département du <strong>territoire de Belfort</strong>, ce sont <strong>5 associations</strong> et <strong>3 collectifs</strong> qui se mobilisent pour des causes environnementales, et qui partagent nos préoccupations.</p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container-fluid has-text-centered">
        <p><p>D’une manière générale, l’objet de FNE 25-90 est d’agir pour la <strong>sauvegarde de ses intérêts dans le domaine de l’environnement</strong>, ainsi que pour la <strong>défense en justice</strong> de l’ensemble de ses membres, y compris la défense de tous leurs intérêts notamment ceux résultant de l’objet de chaque association fédérée ou définis par <strong>l’agrément délivré au titre de l’article L. 141-1 du code de l’environnement</strong> et des droits et obligations relatifs à l’agrément d’<strong>association agréée de protection de l’environnement au titre des articles L. 141-1 et L. 141-3 du code de l’environnement</strong>.</p></p>
        <p>Notre fédération a ainsi pour but <strong>la défense de l’environnement et de la nature</strong> en mettant en pratique les mots clés du réseau FNE :</p>
        <p className="sohoma title is-5">Comprendre pour défendre, informer, sensibiliser, mobiliser ...</p>
        <div className="columns is-centered">
          <div style={{ maxWidth: 344, width: '100%', marginBottom: `1.45rem` }}>
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(relativePath: { eq: "herissons.png" }) {
                    childImageSharp {
                      fluid(maxWidth: 344) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Hérissons" />}
            />
          </div>
        </div>
        <h2>Un acteur écologique local</h2>
        <div className="columns is-centered">
          <div style={{ maxWidth: 842, width: '100%', marginBottom: `1.45rem` }}>
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(relativePath: { eq: "montagnes-paysage.png" }) {
                    childImageSharp {
                      fluid(maxWidth: 842) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="paysages" />}
            />
          </div>
        </div>
        <p>43 % du territoire Franc-comtois (environ 705 000 ha) est recouvert de forêt constituée d’hêtres, de chênes et de sapins dont certains peuvent se dresser jusqu’à 50 mètres. Avec plus de 700 000 hectares de forêt, elle est la plus grande sapinière d'Europe, et possède aussi la seconde forêt de feuillus de France sur 22 000 ha, la forêt de Chaux. Deux grands types d'écosystèmes dominent en Franche-Comté : forestiers et aquatiques (lacs/étangs/tourbières), qui offrent un refuge à une biodiversité élevée, dont de nombreux oiseaux, cerfs, sangliers, écureuils, chats sauvages. Le Grand Tétras, le milan royal, le lynx et enfin le retour du chamois sont emblématiques de la protection et de la restauration des habitats naturels dans la région.</p>
        <div className="columns is-centered">
          <div style={{ width: '88%', maxWidth: 900, position: 'relative' }}>
            <TextFC className="sohoma" style={{ position: 'relative', zIndex: 2, width: '100%' }} />
            <MapFC style={{ position: 'absolute', zIndex: 1, top: 0, left: 0, width: '100%' }} />
          </div>
        </div>
        <h2>Notre méthode</h2>
        <h2>Notre équipe</h2>
        <h2>Favoriser les échanges d’idées et le partage avec nos bénévoles</h2>
        <p>FNE 25-90 est un lieu de <strong>réflexions, de propositions et d'actions concrètes</strong> pour une approche globale, c'est à dire faisant coexister les aspects <strong>humains, économiques, culturels, scientifiques</strong> en prenant en compte <strong>la protection du patrimoine naturel</strong> dans tous les projets de développement économique pour tendre vers un <strong>développement durable</strong>.</p>
      </div>
    </section>

    
    
  </Layout>
)

export default FNE2590
