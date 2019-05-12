import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Join = () => (
  <Layout>
    <SEO 
        title="Adhérer à FNE 25-90 / Devenir bénévole"
        description="Contribuez à la protection de la nature et l'environnement en adhérant à l'association et en vous engageant bénévolement"
    />
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1>Participer à la protection de l'environnement</h1>
          <p><Link to="/nous-rejoindre/#adherer">Adhérez</Link> à France Nature Environnement 25-90 et <strong>devenez acteur local de la protection de l’environnement</strong>.</p>
          <p>Vous souhaitez devenir bénévole ? <Link to="/contact/">Contactez-nous !</Link></p>
        </div>
      </div>
    </section>
    <section className="section" id="adherer">
      <div className="container">
          <h1>Comment devenir adhérent ?</h1>
          <h2>Adhésion par courrier postal</h2>
          <p><a href="/adhesion2019.pdf">Télécharger le formulaire à imprimer et à nous retourner</a></p>
          <h2>Adhésion en ligne</h2>
          <p className="is-italic"><span className="has-text-weight-bold">NB :</span> le don à HelloAsso est renseigné par défaut à environ 2.35€ (selon le montant de votre adhésion), mais vous pouvez cliquer sur "modifier" et le mettre à 0€ si vous ne souhaitez pas laisser de pourboire à HelloAsso.</p>
          <iframe
            id="haWidget"
            allowtransparency="true"
            scrolling="auto"
            src="https://www.helloasso.com/associations/fne-25-90/adhesions/adhesion-fne-25-90/widget"
            style={{ width: '100%', height: 850, border: 'none' }}
            title="Adhésion en ligne FNE2590"
          ></iframe>
      </div>
    </section>

  </Layout>
)

export default Join