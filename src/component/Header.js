import React from 'react'
import styled from 'styled-components'
import bg from '../img/bg.svg'
import Navigation from './Navigation'
import HeaderContent from './HeaderContent'

function Header() {
    return (
        <HeaderStyled>
            <div className="header-content">
                <Navigation />
                <HeaderContent />
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    color: white;
    height: 100vh;
    width: 100%;
    background-image: url(${bg});
    backgrond-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    
    .header-content {
        padding: 0 5rem;
    }
`

export default Header
