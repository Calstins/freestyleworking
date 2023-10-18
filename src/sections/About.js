import React from 'react'
import styled from 'styled-components'
import Img1 from '../assets/Images/img1.webp'
// import Img2 from '../assets/Images/2.webp'
import Img3 from '../assets/Images/image3.webp'

const Section = styled.section`
   position : relative;
   min-height: 100vh;
   width: 80vw;
   display: flex;

   margin: 0 auto;

    @media (max-width:40em){
       width: 90vw;
    };

    @media (max-width:30em){
       width: 100vw;
    };
`
const Title = styled.h1`
    font-size: ${props=>props.theme.fontBig};
    font-family: 'Kaushan Script';
    font-weight: 300;

    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 5;

     @media (max-width:64em){
        font-size: ${props=>`cal(${props.theme.fontBig} - 5vw)`};
        top: 0;
        left: 0;
    };

    @media (max-width:48em){
       font-size: ${props=>props.theme.fontxxxl};
    };
   
`
const Left = styled.div`
    width: 50%;
    font-size: ${props=>props.theme.fontlg};
    font-weight: 300;
    position: relative;
    z-index: 5;
    margin-top: 20%;

    @media (max-width:64em){
       width: 80%;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%) !important;
       margin: 0 auto;

       padding: 2rem;
       font-weight: 600;

       backdrop-filter: blur(2px);
       background-color: ${props => `rgba(${props.theme.textRgba}, 0.4)`};
       border-radius:20px;

    };
     @media (max-width:40em){
       font-size: ${props=>props.theme.fontsm};
    };
     @media (max-width:30em){
       font-size: ${props=>props.theme.fontsm};
       width: 70%;
    };
`
const Right = styled.div`
    width: 50%;
    position: relative;

    img {
        width: 100%;
        height: auto;
    }
    .small-img-1{
        width: 40%;
        position: absolute;
        right: 95%;
        bottom: 10%;
    }
    .small-img-2{
        width: 40%;
        position: absolute;
        left: 80%;
        bottom: 30%;
    }
     @media (max-width:64em){
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       img{
        height: 100vh;
        object-fit: cover;
       }
       .small-img-1{
        width: 30%;
        height: auto;
        left: 5%;
        bottom: 10%;
       }
       .small-img-2{
        width: 30%;
        height: auto;
        left: 60%;
        bottom: 20%;
       }
    };
`


const About = () => {
  return (
    <Section id='fixed-target' className='about'>
        <Title 
            data-scroll 
            data-scroll-speed='-2'  
            data-scroll-direction='horizontal'
        >
            About Us
        </Title>
        <Left 
            data-scroll data-scroll-sticky data-scroll-target='#fixed-target'
        >
            Freestyle Working BV is the one-stop solution for all your Textile and garment sourcing requirements from China, India, Pakistan & Bangladesh
<br />
Freestyle Working BV is an international trading company located in Amsterdam/Netherlands. As specialists in managing customize orders of clothing of any type, we have a Worldwide network in the USA, West Africa, Middle East & Europe to facilitate cooperation and assistance to our customers.
<br />
Freestyle Working BV is the right partner for your follow up orders. In our ability to leverage vertical and horizontal integration, the Freestyle Working Ltd is the best solution for taking care of your orders around the world
        </Left>
        <Right>
            <img src={Img1} alt="About Us"/>
            {/* <img src={Img2} data-scroll data-scroll-speed='5' alt="about-us" className='small-img-1' /> */}
            <img src={Img3} data-scroll data-scroll-speed='-2' alt="about-us" className='small-img-2'/>
        </Right>
    </Section>
  )
}

export default About