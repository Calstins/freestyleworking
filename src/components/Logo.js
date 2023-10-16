import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ImgLogo from '../assets/Svgs/fsw-logo.svg'

const Container = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;

    width: 100%;
    color:${props => props.theme.text};
    z-index: 5;

`

const Logo = () => {
  return (
    <Container>
        <Link to='/'>
           <img src={ImgLogo} alt="" height={100}/> 
        </Link>
    </Container>
  )
}

export default Logo