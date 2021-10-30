import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'

function SecondaryButton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img alt="" src={arrow} />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: .8rem 2rem;
    font-family: inherit;
    font-size: inherit; 
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    junstigy-content: space-between;

    img {
        padding-left: .9rem;
    }
`

export default SecondaryButton
