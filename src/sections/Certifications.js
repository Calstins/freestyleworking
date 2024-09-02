import React from 'react';
import styled from 'styled-components';
import CertifcationImages from '../components/CertifcationImages';

const Certifications = () => {
  const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    min-height: 30vh;
    width: 90vw;
    display: flex;

    margin: 0 auto;

    @media (max-width: 40em) {
      width: 90vw;
    }

    @media (max-width: 30em) {
      width: 100vw;
      flex-direction: column;
    }
  `;
  const Title = styled.h1`
    font-size: ${(props) => props.theme.fontxxl};
    font-family: 'Kaushan Script';
    margin-top: 1rem;
    font-weight: 300;
    text-shadow: 1px 1px 1px ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    z-index: 11;
  `;
  return (
    <Section className="certificates">
      <Title>Certifications</Title>
      <CertifcationImages />
    </Section>
  );
};

export default Certifications;
