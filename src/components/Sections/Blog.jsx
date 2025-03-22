import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Actualités et Conseils Énergie</h1>
            <p className="font13">
              Découvrez nos dernières actualités, conseils et innovations dans le domaine de l'électricité et du gaz.  
              <br />
              Restez informés sur les évolutions du secteur énergétique et les services de Sonelgaz.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Nouveau Centre de Service"
                text="Sonelgaz inaugure un nouveau centre client pour améliorer l'assistance et la proximité."
                tag="Entreprise"
                author="Sonelgaz, il y a 3 jours"
                action={() => alert("Article sélectionné")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Réduire votre Facture Énergétique"
                text="Découvrez nos conseils pour optimiser votre consommation d’énergie et faire des économies."
                tag="Conseils"
                author="Sonelgaz, il y a 1 semaine"
                action={() => alert("Article sélectionné")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Transition Énergétique"
                text="Comment Sonelgaz s’engage pour un avenir énergétique plus durable en Algérie."
                tag="Innovation"
                author="Sonelgaz, il y a 2 semaines"
                action={() => alert("Article sélectionné")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Travaux & Coupures Programmées"
                text="Retrouvez les prévisions de maintenance et les coupures d’énergie planifiées."
                tag="Service"
                author="Sonelgaz, il y a 5 jours"
                action={() => alert("Article sélectionné")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Nouveaux Tarifs 2025"
                text="Tout ce qu’il faut savoir sur les ajustements tarifaires et les nouvelles offres de Sonelgaz."
                tag="Tarifs"
                author="Sonelgaz, il y a 1 mois"
                action={() => alert("Article sélectionné")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Sécurité Électrique"
                text="Les bonnes pratiques pour éviter les accidents domestiques liés à l’électricité."
                tag="Prévention"
                author="Sonelgaz, il y a 2 mois"
                action={() => alert("Article sélectionné")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Voir Plus" action={() => alert("Chargement des articles...")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Témoignages de Nos Clients</h1>
            <p className="font13">
              Découvrez ce que nos clients disent de nos services et de notre engagement envers eux.  
              <br />
              Votre satisfaction est notre priorité !
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
