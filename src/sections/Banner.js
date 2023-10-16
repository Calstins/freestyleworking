import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    min-height: 100vh;
    width: 80vw;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`
const Container = styled.div`
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const BannerComponent = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    font-family: 'Kaushan Script';
    color: ${props=>props.theme.text};
    white-space: nowrap;
    line-height: 1;

    span {
        display: block;
        background-color: ${props=>props.theme.blue};
        padding: 1rem 2rem;
    }
`

const Banner = () => {
  return (
    <Section>
        <Container id='up'>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='8' data-scroll-target='#up' >Style is your secret weapon</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='-6' data-scroll-target='#up' >for conquering the daily battles of life.</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='6' data-scroll-target='#up' >When in doubt,</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='-4' data-scroll-target='#up' >elegance of a little black dress.</span>
            </BannerComponent>
        </Container>
    </Section>
  )
}

export default Banner