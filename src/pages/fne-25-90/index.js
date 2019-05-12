import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { ReactComponent as TextFC } from "../../images/text-franche-comte.svg"
import { ReactComponent as MapFC } from "../../images/map-franche-comte.svg"
import { ReactComponent as Paysage } from "../../images/montagnes-paysage.svg"
import { ReactComponent as Methode } from "../../images/notre-methode.svg"
import userIcon from "../../images/boy.svg"
import girlIcon from "../../images/girl.svg"

const FNE2590 = () => (
  <Layout>
    <SEO 
        title="FNE 25-90, fédération départementale des associations de protection de la Nature et de l'environnement du Doubs et du Territoire de Belfort"
        description="L’objet de FNE 25-90 est d’agir pour la sauvegarde de ses intérêts dans le domaine de l’environnement, ainsi que pour la défense en justice de l’ensemble de ses membres"
    />
    <div className="container">
      <h1>L'association FNE 25-90</h1>
    </div>
    <section className="hero is-primary" style={{ marginTop: 20}}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2>France Nature Environnement 25-90 est la fédération départementale des associations de protection de la nature et de l’environnement du Doubs et du territoire de Belfort.</h2>
          <p>Dans le département du <strong>Doubs</strong>, ce sont <strong>27 associations</strong> qui ont décidé de se lier pour faire entendre leurs revendications environnementales.</p>
          <p>Dans le département du <strong>territoire de Belfort</strong>, ce sont <strong>5 associations</strong> et <strong>3 collectifs</strong> qui se mobilisent pour des causes environnementales.</p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <p>D’une manière générale, l’objet de FNE 25-90 est d’agir pour la <strong>sauvegarde de ses intérêts dans le domaine de l’environnement</strong>, ainsi que pour la <strong>défense en justice</strong> de l’ensemble de ses membres, y compris la défense de tous leurs intérêts notamment ceux résultant de l’objet de chaque association fédérée ou définis par <strong>l’agrément délivré au titre de l’article L. 141-1 du code de l’environnement</strong> et des droits et obligations relatifs à l’agrément d’<strong>association agréée de protection de l’environnement au titre des articles L. 141-1 et L. 141-3 du code de l’environnement</strong>.</p>
        <p>Notre fédération a ainsi pour but <strong>la défense de l’environnement et de la nature</strong> en mettant en pratique les mots clés du réseau FNE :</p>
        <p className="sohoma" style={{ fontSize: '1.4rem' }}>Comprendre pour défendre, informer, sensibiliser, mobiliser ...</p>
        <h2 className="has-text-centered">Un acteur écologique local</h2>
        <div className="columns is-centered">
          <Paysage  style={{ margin: '2rem 0', maxWidth: 840 }} />
        </div>
        <p><strong>43 % du territoire Franc-comtois</strong> (environ 705 000 ha) est recouvert de forêt constituée d’hêtres, de chênes et de sapins dont certains peuvent se dresser jusqu’à 50 mètres.</p>
        <p>Avec plus de 700 000 hectares de forêt, elle est <strong>la plus grande sapinière d'Europe</strong>, et possède aussi <strong>la seconde forêt de feuillus de France</strong> sur 22 000 ha, la forêt de Chaux.</p>
        <p>Deux grands types d'écosystèmes dominent en Franche-Comté : forestiers et aquatiques (lacs/étangs/tourbières), qui offrent un refuge à une <strong>biodiversité élevée</strong>, dont de nombreux oiseaux, cerfs, sangliers, écureuils, chats sauvages. <strong>Le Grand Tétras, le milan royal, le lynx</strong> et enfin le retour du <strong>chamois</strong> sont emblématiques de la protection et de la restauration des habitats naturels dans la région.</p>
        <div className="columns is-centered" style={{ margin: '4rem 0' }}>
          <div style={{ width: '88%', maxWidth: 900, position: 'relative' }}>
            <TextFC className="sohoma" style={{ position: 'relative', zIndex: 2, width: '100%' }} />
            <MapFC style={{ position: 'absolute', zIndex: 1, top: 0, left: 0, width: '100%' }} />
          </div>
        </div>
        <h2 className="has-text-centered">Notre méthode</h2>
        <style type="text/css">
          {`#methode svg{display:none}
          .mbtitle{font-family:Sohoma;font-size:1.5rem;text-align:center;margin:2rem 0 1rem}
          #mb6{font-size:2.5rem;color:#c11a1a;font-family:Sohoma;font-weight:bold;margin-top:2rem}
          #mb7{font-size:2rem;font-family:Sohoma;}
          @media screen and (min-width: 960px) {
            #methode{position:relative;width:900px;margin:80px auto 0}
            #methode svg{width:600px;display:block !important;margin:0 auto}
            #mb1{color:#f3a245;position: absolute;top: 15px;width: 357px;left: 350px;}
            #mb2{position: absolute;top: -13px;width: 234px;left:20px}
            #mb3{position: absolute;top: 87px;width: 252px;left:620px}
            #mb4{position: absolute;top: 330px;width:300px;left: -22px}
            #mb5{position: absolute;top: 343px;width: 270px;left: 621px}
            #mb6{margin-top:0;position: absolute;left: 412px;top: 516px}
            #mb7{margin-left:318px;margin-top:30px}
            .mbtitle{margin:0}
            .mbtxt{text-align:justify;font-size:14px}
            #mb4 .mbtitle{text-align:left}`}
        </style>
        <div id="methode">
          <Methode />
          <div id="mb1" class="mbtxt">En assurant la sensibilisation citoyenne avec l’appui des associations membres de la fédération</div>
          <div id="mb2">
              <div class="mbtitle" style={{ "color": "#79a6d4" }}>COMPRENDRE</div>
              <div class="mbtxt">Nous dialoguons en permanence avec l'ensemble de la société civile et plaidons la cause de l'environnement auprès des décideurs. Impliqués dans le débat public, nous proposons des solutions concrètes pour la résolution des problématiques environnementales locales.</div>
          </div>
          <div id="mb3">
              <div class="mbtitle" style={{ "color": "#c8758e" }}>CONVAINCRE</div>
              <div class="mbtxt">Face à l'urgence écologique, nous déployons tous les outils de la démocratie. Nous alertons l'opinion publique et allons en justice quand le droit de l'environnement n'est pas respecté. </div>
          </div>
          <div id="mb4">
              <div  class="mbtitle" style={{ "color": "#a38a75" }}>MOBILISER</div>
              <div class="mbtxt">Pour que chacun détienne les clés du débat environnemental, nous informons les citoyens et menons des actions ciblées de sensibilisation.</div>
          </div>
          <div id="mb5">
              <div  class="mbtitle" style={{ "color": "#7cb928" }}>DÉFENDRE</div>
              <div class="mbtxt">Pour bien protéger la nature et l'environnement, il est indispensable d'en saisir la complexité. Présents sur le terrain, militants et indépendants, nous menons un travail de fond qui nourrit nos positions.</div>
          </div>
          <div id="mb6">FNE 25-90</div>
          <div id="mb7">ENSEMBLE, POUR LA NATURE</div>
        </div>
      </div>
    </section>
    <section className="hero is-primary has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h2>Favoriser les échanges d’idées et le partage avec nos bénévoles</h2>
          <p>FNE 25-90 est un lieu de <strong>réflexions, de propositions et d'actions concrètes</strong> pour une approche globale faisant coexister les aspects <strong>humains, économiques, culturels, scientifiques</strong> en prenant en compte <strong>la protection du patrimoine naturel</strong> dans tous les projets de développement économique pour tendre vers un <strong>développement durable</strong>.</p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container has-text-centered">
        <h2>Notre équipe</h2>
        <style type="text/css">
            {`.team li{display:inline-block;width:180px;margin:20px 5px;padding:100px 0 20px;font-size:1rem;font-family:Sohoma;background:url(${userIcon}) no-repeat 50% 0;background-size:80px 80px}`}
            {`.team li.girl{background-image:url(${girlIcon})}`}
            {`.team div{font-family:Saira;font-size:1.1rem}`}
        </style>
        <ul className="team" style={{ marginTop: '3rem' }}>
          <li><div>Gérard Groubatch</div> Président</li>
          <li><div>Gilles Benest</div> Vice président</li>
          <li className="girl"><div>Marie-Odile Crabbe-Diawara</div> Trésorière</li>
          <li className="girl"><div>Isabelle Groubatch</div> Secrétaire</li>
          <li className="girl"><div>Elena Valdivieso</div> Salariée</li>
          <li className="girl"><div>Emilia Pachot</div> Salariée</li>
          <li><div>Patrick Bourque</div> Administrateur</li>
          <li className="girl"><div>Christine Henriot</div> Administratrice</li>
          <li><div>André Nachin</div> Administrateur</li>
          <li><div>Daniel Schlatter</div> Administrateur</li>
          <li><div>Claude Baranger</div> Administrateur</li>
          <li className="girl"><div>Sylvie Claudel</div> Administratrice</li>
          <li><div>Jean-Luc Dubois</div> Administrateur</li>
        </ul>
        <p>Ainsi que des bénévoles répartis dans les départements du Doubs et du Territoire de Belfort !</p>
      </div>
    </section>

    
    
  </Layout>
)

export default FNE2590
