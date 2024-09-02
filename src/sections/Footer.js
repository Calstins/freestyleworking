import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Logo from '../assets/Svgs/fsw-logo.svg';
import CopyrightYear from '../components/CopyrightYear';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoBox = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 15vw;
  height: auto;
  flex: 1;

  @media (max-width: 768px) {
    margin-top: 3rem;
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  div {
    display: flex;
    justify-content: start;
    span {
      margin-right: 1rem;
      color: ${(props) => props.theme.green};
    }
  }
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    .child:nth-child(2) {
      width: 70vw;
    }
  }
`;

const RefNumbers = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    justify-content: start;
    span {
      margin-right: 1rem;
      color: ${(props) => props.theme.green};
    }
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const AddressBox = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ContactSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  span {
    color: ${(props) => props.theme.green};
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  /* @media  (max-width: 48em) {
            width: 90vw;
            justify-content: center;
        } */
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    /* @media  (max-width: 48em) {
            width: 90vw;
            justify-content: center;
        } */
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 64em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const BottomFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontsm};

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxs};
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <Section id="footer">
      <LogoBox>
        <LogoImage
          src={Logo}
          alt=""
          srcset=""
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        />
        <ContactInfo>
          <div>
            <span>&#9742;</span>
            <a href="tel:+31685398309">+31-6853-98309</a>
          </div>
          <div>
            <span>&#9993;</span>
            <a href="mailto:info@freestyleworking.ltd">
              info@freestyleworking.ltd
            </a>
          </div>
        </ContactInfo>
        <RefNumbers
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
        >
          <div>
            <span>KVN-</span>
            <p>83242538</p>
          </div>
          <div>
            <span>EORI-</span>
            <p>NL862788353</p>
          </div>
          <div>
            <span>VAT-</span>
            <p>NL862788353BO1</p>
          </div>
        </RefNumbers>
      </LogoBox>
      <AddressBox>
        <ContactSection>
          <div>
            <span>Headquarters</span>
            <p>
              Joop Geesinkiweg 722, 1114Ab, <br />
              Amsterdam- Duivendrecht <br />
              The Netherland
            </p>
          </div>
          <div>
            <span>Bangledesh Office</span>
            <p>
              House 14 (D-1, 4th floor), Road 18,
              <br />
              Sector 1, Utara-1230, Dhaka, <br />
              Bangladesh
            </p>
          </div>
          <div>
            <span>Sales Representative Office</span>
            <p>
              29, Dressinton Avenue, Se4 Jh <br />
              London <br />
              United Kingdom
            </p>
          </div>
          <div>
            <span>Sales Representative Office</span>
            <p>
              3, Kafi Street, Alausa 100212 Ikeja
              <br />
              Lagos State <br />
              Nigeria
            </p>
          </div>
        </ContactSection>
        <ContactSection>
          <div>
            <span>Netherland Logistics/ Bonded Warehouse </span>
            <p>
              Fokkerweg 300 gebouw 5-1438 AN Oude Meer <br />
              The Netherland
            </p>
          </div>
          <div>
            <span>Italy Logistics/Bonded Warehouse:</span>
            <p>
              Via Ufficio dei Grani, 35123 Livorno
              <br />
              Italy
            </p>
          </div>
          <div>
            <span>Middle East Logistics/ Bonded Warehouse</span>
            <p>
              Jebel Ali (Opposite JAFZA-8), Street 402, Dubai
              <br />
              United Arab Emirate
            </p>
          </div>
        </ContactSection>
      </AddressBox>
      <FooterComponent
        initial={{ y: '-400px' }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        <ul>
          <li onClick={() => handleScroll('#home')}>Home</li>
          <li onClick={() => handleScroll('.about')}>About</li>
          <li onClick={() => handleScroll('.certificates')}>Certificates</li>
          <li onClick={() => handleScroll('#collection')}>Our Collections</li>
          <li onClick={() => handleScroll('#new-arrival')}>New Arrivals</li>
        </ul>
        <BottomFooter>
          <CopyrightYear />
        </BottomFooter>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
