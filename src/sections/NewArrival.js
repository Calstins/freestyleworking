import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import img1 from '../assets/Images/1.webp'
import img2 from '../assets/Images/2.webp'
import img3 from '../assets/Images/3.webp'
import img4 from '../assets/Images/4.webp'


const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    margin: 0 auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    /* background-color: yellowgreen; */
`

const Overlayer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    height: 90vh;

    box-shadow: 0 0 0 5vw ${props=>props.theme.text};
    border: 3px solid ${props => props.theme.body};
    z-index: 11;
`


const Title = styled.h1`
    font-size: ${props=>props.theme.fontxxl};
    font-family: 'Kaushan Script';
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props => props.theme.text};
    color: ${props => props.theme.body};
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;
`

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 25vw;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Text = styled.div`
    width: 20%;
    font-size: ${props=>props.theme.fontmd};
    font-weight: 300;
    position: absolute;
    padding: 2rem;
    top: 0;
    right: 0;
    z-index: 11;
`
const Item = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;

    img{
       width :100%;
       height: auto;
       z-index: 5;
    }
`
const ProdCategories = ({img, title=''})=>{
    return (
        <Item>
            <img src={img} alt={title} />
            <h2>{title}</h2>
        </Item>
    )
}


const NewArrival = () => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)
    const scrollingRef = useRef(null)

    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = scrollingRef.current;
        let t1 = gsap.timeline();
        setTimeout(() => {
            t1.to (element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: 'bottom+=50% top-=50%',
                    scroller: '.App',
                    scrub: true,
                    pin: true,
                    // markers: true,
                },
                ease: 'none',
            });

            //vertical scrolling
            t1.fromTo(scrollingElement, 
                {
                    y:'0',
                },
                {
                    y:'-50%',
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: 'bottom top',
                    scroller: '.App',
                    scrub: true,
                    // markers: true,
                },
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
    <Section ref={ref}>
        <Overlayer/>
        <Title 
            data-scroll 
            data-scroll-speed='-2'
            data-scroll-direction='horizontal' 
        >
            New Arrivals
        </Title>
        <Container ref={scrollingRef}>
            <ProdCategories img={img1} title='Men Underwear'/>
            <ProdCategories img={img2} title='Women Underwear'/>
            <ProdCategories img={img3} title='Women Underwear'/>
            <ProdCategories img={img4} title='Men Underwear' />
        </Container>
        <Text 
            data-scroll data-scroll-speed='-2'
        >
            Elevate your style with the freshest fashion trends of the season. Discover our new arrivals, carefully curated to keep you on the cutting edge of fashion. From chic everyday essentials to statement pieces that will turn heads, our collection offers something for every fashion-forward individual.
            <br /><br />
            Explore the latest in clothing, from elegant dresses to casual streetwear. Unveil a world of possibilities in colors, patterns, and designs. Whether you're revamping your wardrobe or seeking that perfect standout piece, our new arrivals are designed to inspire your personal style journey.
            <br /><br />
            Be the first to embrace what's new. Shop our latest arrivals today and stay ahead of the fashion curve.
        </Text>
    </Section>
  )
}

export default NewArrival