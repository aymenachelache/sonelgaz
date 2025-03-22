import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Consultez Nos Tarifs</h1>
            <p className="font13">
              Découvrez nos différentes formules d’abonnement pour l’électricité et le gaz, adaptées aux particuliers et aux professionnels.
              <br />
              Pour plus de détails sur nos offres, consultez notre grille tarifaire ou contactez notre service clientèle.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="bolt"
                price="1 500 DA/mois"
                title="Électricité - Résidentiel"
                text="Abonnement basse tension pour les foyers, incluant une consommation de base et assistance technique."
                offers={[
                  { name: "Puissance souscrite : 6 kVA", cheked: true },
                  { name: "Tarif réglementé", cheked: true },
                  { name: "Service d’urgence", cheked: true },
                  { name: "Facturation mensuelle", cheked: true },
                ]}
                action={() => alert("Électricité Résidentiel sélectionné")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="flame"
                price="1 200 DA/mois"
                title="Gaz Naturel - Résidentiel"
                text="Abonnement au gaz naturel pour les particuliers, avec consommation ajustable et assistance."
                offers={[
                  { name: "Pression standard", cheked: true },
                  { name: "Tarif réglementé", cheked: true },
                  { name: "Intervention rapide", cheked: true },
                  { name: "Paiement flexible", cheked: true },
                ]}
                action={() => alert("Gaz Résidentiel sélectionné")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="factory"
                price="Sur devis"
                title="Électricité & Gaz - Entre"
                text="Solutions énergétiques adaptées aux entreprises et industries avec options de personnalisation."
                offers={[
                  { name: "Fourniture en moyenne et haute tension", cheked: true },
                  { name: "Contrat sur mesure", cheked: true },
                  { name: "Support dédié", cheked: true },
                  { name: "Options tarifaires flexibles", cheked: true },
                ]}
                action={() => alert("Entreprise sélectionnée")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;

