import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../styles/Layouts'

function ChartStatas({name, amount}) {
    return (
        <ChartStatasStyled>
            <p>{name}</p>
            <h4>{amount}</h4>
        </ChartStatasStyled>
    )
}

const ChartStatasStyled = styled.div`
    background-color: white;
    border-radius: 50px;
    width: 12rem;
    height: 10rem;
    padding: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    h4{
        margin-top: 1rem;
        font-size: 2.2rem;
    }
`

export default ChartStatas
