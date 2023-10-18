import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion';
import img1 from '../assets/Images/photo1.webp'
import img2 from '../assets/Images/photo2.webp'
import img3 from '../assets/Images/photo3.webp'
import img4 from '../assets/Images/photo4.webp'
import img5 from '../assets/Images/photo5.webp'
import img6 from '../assets/Images/photo6.webp'



const Section = styled.section`
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;
`
const Title = styled.h1`
    font-size: ${props=>props.theme.fontxxl};
    font-family: 'Kaushan Script';
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    color: ${props => props.theme.text};
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;
    
    @media (max-width:64em){
        font-size: ${props=>props.theme.fontxxxl}
    };

    @media (max-width:48em){
       font-size: ${props=>props.theme.fontxl};
    };
`
const Left = styled.div`
    width: 35%;
    background-color: ${props=>props.theme.body};
    color: ${props=>props.theme.text};

    min-height: 100vh;
    z-index: 5;

    position:fixed;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-size: ${props=>props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width:64em){
       p{
            font-size: ${props=>props.theme.fontmd};
       }
    };

    @media (max-width:48em){
        width: 40%;
       p{
            font-size: ${props=>props.theme.fontsm};
       }
    };

    @media (max-width:30em){
       p{
            font-size: ${props=>props.theme.fontxs};
       }
    };
`

const Right = styled.div`
    position: absolute;
    left: 35%;
    padding-left: 30%;
    min-height: 100vh;

    background-color:  ${props=>props.theme.grey};
    /* width: 65% */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1{
        width: 5rem;
        margin: 0 2rem;
    }
`
const Item = styled(motion.div)`
    
    width: 30rem;
    margin-right: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
       width :100%;
       height: auto;
       cursor: pointer;
    }
    h1{
        
        display: inline-block;
        width: fit-content;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
    }
    @media (max-width:48em){
       width: 15rem;
    };
`
const ProdCategories = ({img, title=''})=>{
    return (
        <Item
            initial={{filter: 'grayscale(100)'}}
            whileInView = {{filter:'grayscale(0%)'}}
            transition = {{duration:0.5}}
            viewport = {{once: false, amount: "all" }}
        >
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </Item>
    )
}

const Shop = () => {

    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef(null)
    const horizontalRef = useRef(null)

    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = horizontalRef.current;
        let pinWrapWidth = scrollingElement.offsetWidth;
        let t1 = gsap.timeline();
        setTimeout(() => {
            t1.to (element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App',
                    scrub: true,
                    pin: true,
                    // markers: true,
                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none',
            });

            //horizontal scrolling
            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App',
                    scrub: true,
                    // markers: true,
                },
                x: -pinWrapWidth,
                ease: 'none',
            });
            ScrollTrigger.refresh();
        }, 1000);
         return () => {
            //clear instances
            t1.kill();
            ScrollTrigger.kill();
        };
    }, []);


  return (
    <Section ref= {ref} id='collection'>
        <Title 
            data-scroll 
            data-scroll-speed='-1' 
        >
            Our Collections
        </Title>
        <Left>
            <p>
                Freestyle Working BV is a right partner for your follow up orders, our ability to leverage vertical and horizontal integration.

                Freestyle Working BV is the Best solution for take care your orders around the world
            </p>
        </Left>
        <Right ref= {horizontalRef}>
            <ProdCategories img={img1} title='Women Underwear'/>
            <ProdCategories img={img2} title='Men Underwear'/>
            <ProdCategories img={img3} title='Kids Clothes'/>
            <ProdCategories img={img4} title='Sport Wears'/>
            <ProdCategories img={img5} title='Safety Vest'/>
            <ProdCategories img={img6} title='Women Fashion'/>
        </Right>
    </Section>
  )
}

export default Shop