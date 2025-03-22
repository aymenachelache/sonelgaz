import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="J'ai été agréablement surpris par la rapidité de l'intervention de Sonelgaz lors d'une panne dans mon quartier. Un service efficace !"
            author="Karim B., Alger"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Grâce aux conseils de Sonelgaz, j'ai réduit ma consommation d'électricité de 20 % ! Des recommandations très utiles."
            author="Nadia T., Oran"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Le nouveau service client en ligne est super pratique. Plus besoin de me déplacer pour gérer mes factures !"
            author="Rachid M., Constantine"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Un service clientèle toujours à l'écoute et des agents professionnels. Sonelgaz améliore vraiment ses services !"
            author="Fatima L., Blida"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="L'application mobile de Sonelgaz est intuitive et permet de suivre ma consommation en temps réel. Très pratique !"
            author="Amine K., Sétif"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Merci à Sonelgaz pour son engagement envers l'énergie renouvelable. J'attends avec impatience leurs nouveaux projets !"
            author="Yacine D., Annaba"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
